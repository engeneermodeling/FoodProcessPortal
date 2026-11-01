from pathlib import Path
import json
from docx import Document
from docx.shared import Cm,Pt,RGBColor
from docx.oxml import OxmlElement
from docx.oxml.ns import qn

root=Path('public/presentations/mixing')
notes=json.loads((root/'lecture-notes.json').read_text(encoding='utf-8'))
assert len(notes)==43 and sum(n['minutes'] for n in notes)==80
clock=80

doc=Document();sec=doc.sections[0];sec.page_width=Cm(21);sec.page_height=Cm(29.7)
sec.top_margin=Cm(1.8);sec.bottom_margin=Cm(1.7);sec.left_margin=Cm(2.1);sec.right_margin=Cm(1.9)
for name in ['Normal','Title','Subtitle','Heading 1','Heading 2']:
    style=doc.styles[name];style.font.name='Calibri';style.font.color.rgb=RGBColor(0,0,0)
normal=doc.styles['Normal'];normal.font.size=Pt(11);normal.paragraph_format.space_after=Pt(7);normal.paragraph_format.line_spacing=1.12
doc.styles['Title'].font.size=Pt(30);doc.styles['Heading 1'].font.size=Pt(17);doc.styles['Heading 2'].font.size=Pt(13)
for style in doc.styles:
    for border in list(style.element.iter(qn('w:pBdr'))):
        border.getparent().remove(border)
doc.core_properties.title='Перемішування в харчових технологіях'
doc.core_properties.subject='Доповідь до 43 слайдів відкритої лекції тривалістю 80 хвилин'
doc.core_properties.author='FoodProcessPortal'
doc.add_paragraph('Перемішування в харчових технологіях','Title')
doc.add_paragraph('Доповідь до відкритої лекції','Subtitle')
doc.add_paragraph('FoodProcessPortal  •  43 слайди  •  80 хвилин')
doc.add_paragraph('Сценарій для викладача пояснює фізичний зміст перемішування, відмінності конструкцій і вибір обладнання для харчових продуктів. Текст узгоджено з порядком слайдів інтегрованої HTML презентації.')
doc.add_paragraph('Як проводити лекцію','Heading 1')
doc.add_paragraph('Кожен блок містить текст доповіді, точний інтервал у загальному таймінгу й завдання для аудиторії. Вісімдесят хвилин включають пояснення, розбір фотографій і креслень, короткі демонстрації та обговорення. Виділені курсивом вказівки призначено викладачеві; їх не потрібно читати вголос.')
doc.add_paragraph('На слайдах 4, 5, 7, 22 і 32 підключено надані відео. Для довгих роликів вибрано фрагменти до 35 секунд; короткі показують повністю. Демонстрації замінюють частину обговорення та входять у 80 хвилин заняття. На слайдах 15, 18 і 25 можна за потреби вибрати додатковий локальний файл. До показу перевірте звук. Фрагмент «Чарлі і шоколадна фабрика» на слайді 32 є художньою ілюстрацією, а не демонстрацією реального коншування.')
doc.add_paragraph('Очікувані результати','Heading 1')
for p in ['Пояснити осьовий, радіальний і тангенціальний рух та читати інженерні схеми.','Розрізняти конструкції для рідин, густих мас, тіста та сипких продуктів.','Обґрунтувати вибір за властивостями продукту й технологічною метою.','Обчислити Reₘ, потужність на валу та коефіцієнт варіації концентрації.']:
    doc.add_paragraph(p,'List Bullet')
doc.add_paragraph('Числові приклади є навчальними. Вибір двигуна й прийнятність однорідності потребують окремих вихідних даних та встановлених критеріїв.')

for i,n in enumerate(notes):
    if i%2==0:doc.add_page_break()
    elif i:doc.add_paragraph('')
    doc.add_paragraph(f"Слайд {n['slide']} {n['title'].replace(':','').replace('?','')}",'Heading 1')
    p=doc.add_paragraph();r=p.add_run(f"{n['start']:02d}–{n['end']:02d} хв  |  Тривалість {n['minutes']} хв");r.bold=True;r.font.size=Pt(10)
    for text in n['speech']:doc.add_paragraph(text)
    p=doc.add_paragraph();r=p.add_run('Робота з аудиторією. '+n['activity']);r.italic=True;r.font.size=Pt(10)
    p.paragraph_format.space_before=Pt(5)

doc.add_page_break();doc.add_paragraph('Джерела та матеріали','Heading 1')
for t in [
'Надана HTML презентація FoodProcessPortal на 43 слайди та її архів із зображеннями оригінальних навчальних слайдів.',
'FoodProcessPortal. Основи перемішування у харчових апаратах. Лекція 8. https://foodprocessportal.vercel.app/uk/topics/mixing/lecture-08-mixing-basics',
'FoodProcessPortal. Розрахунок мішалок та багатофазне перемішування. Лекції 9 і 10. Розділ теми: https://foodprocessportal.vercel.app/uk/topics/mixing',
'EKATO. Conventional Impellers. Конструкції та переважні напрями потоків. https://www.ekato.com/products/impellers/conventional-impellers/',
'Tetra Pak Dairy Processing Handbook. Mixers. https://dairyprocessinghandbook.tetrapak.com/chapter/mixers',
'BME Systems. Custom Rushton Impellers. Ідентифікація наданої фотографії турбіни. https://www.bmesystems.com/product/custom-rushton-impellers/',
'NOV. WVM Mixers. Статичний змішувач для водогосподарських систем як ілюстрація принципу. https://www.nov.com/products/wvm-mixers',
'Silverson. Mayonnaise Manufacture. https://www.silverson.com/images/uploads/documents/F_Mayonnaise_Manufacture_2016_US.pdf',
'Джерела кожного локального фото збережено в sources.json поруч із презентацією; у слайдах залишено посилання на першоджерела.']:
    doc.add_paragraph(t)
doc.add_paragraph('Контрольні відповіді','Heading 1')
doc.add_paragraph('Приклад потужності: Reₘ = 36 800; P = 1589,76 Вт ≈ 1,59 кВт. Приклад однорідності: середня концентрація 10,0%; сума квадратів відхилень 0,10; вибіркове стандартне відхилення 0,158 процентного пункту; CV ≈ 1,58%. Нормативний поріг у прикладі не задано.')

# Page numbers are useful while presenting a long lecturer manuscript.
footer=sec.footer.paragraphs[0];footer.alignment=2
run=footer.add_run('FoodProcessPortal  •  ');run.font.size=Pt(9)
field=OxmlElement('w:fldSimple');field.set(qn('w:instr'),'PAGE');footer._p.append(field)
out=Path('public/docs/mixing/open-lecture-43-slides.docx');out.parent.mkdir(parents=True,exist_ok=True);doc.save(out)
print(json.dumps({'slides':len(notes),'minutes':clock,'words':sum(len(' '.join(n['speech']).split()) for n in notes),'docx':str(out)},ensure_ascii=False))
