from __future__ import annotations

from pathlib import Path


PATH = Path("src/content/courses/ru/bioprocess-engineering/chapter-01-general-information.md")

REPLACEMENTS = {
    "For an arbitrary apparatus, the material balance scheme is shown in Fig. 1.1. According to the law of conservation of mass, the material balance can be written as:": "Для произвольного аппарата схема материального баланса показана на рис. 1.1. Согласно закону сохранения массы материальный баланс можно записать так:",
    "where A, B, C, D, E, F, G are the components entering and leaving the apparatus; P_i are their conventional masses.": "где A, B, C, D, E, F, G - компоненты, которые входят в аппарат и выходят из него; P_i - условные массы этих веществ.",
    "By analogy, for the heat balance scheme (Fig. 1.2), the law of conservation of energy can be expressed by the heat balance of the enthalpy streams entering and leaving the apparatus:": "По аналогии для схемы теплового баланса (рис. 1.2) закон сохранения энергии можно выразить тепловым балансом потоков, входящих в аппарат и выходящих из него:",
    "where Q_int is heat released inside the apparatus during operation; Q_ext is heat supplied from outside; Q_loss is heat lost to the surroundings.": "где Q_int - тепло, выделяемое внутри аппарата при его работе; Q_ext - тепло, подведенное извне; Q_loss - тепло, потерянное в окружающую среду.",
    "The heat balance can also be represented as a Sankey diagram (Fig. 1.3). The heat brought by each component is shown at a selected scale. The sum of the widths of all incoming heat-flow segments is equal to the sum of the widths of the outgoing heat-flow segments.": "Тепловой баланс можно представить в виде диаграммы Сенки (рис. 1.3). Тепло, которое приносит каждый компонент, изображают в выбранном масштабе. Сумма толщин входящих тепловых потоков равна сумме толщин выходящих тепловых потоков.",
    "Many technological operations are governed by transfer processes. In hydrodynamic processes the transferred object is moving mass, in thermal processes it is thermal energy, and in diffusion processes it is a component transferred from one phase to another.": "Во многих технологических операциях главную роль играют процессы переноса. В гидродинамических процессах переносится движущаяся масса, в тепловых - тепловая энергия, в диффузионных - компонент, переходящий из одной фазы в другую.",
    "Comparison of these three kinetic equations shows their complete analogy, often called the triple analogy. The general kinetic transfer equation is:": "Сравнение этих трех кинетических уравнений показывает их полную аналогию, которую называют тройной аналогией. Общий вид кинетического уравнения переноса:",
    "where I is the process rate, L is permeability, and x is the driving force.": "где I - скорость процесса, L - проницаемость, x - движущая сила.",
    "A set of interacting bodies is called a system. A key question is how far the system is from equilibrium and how it changes under external influence. A system is considered equilibrium when its state does not change with time. In terms of transfer processes, equilibrium is a state in which no transfer occurs even when partitions do not resist it.": "Совокупность взаимодействующих тел называют системой. Важно оценить, насколько система удалена от равновесия и как она изменяется под внешним воздействием. Равновесной считают систему, состояние которой не меняется во времени. С точки зрения переноса равновесие означает отсутствие переноса даже при отсутствии сопротивления разделяющих перегородок.",
    "The direction of change is described by the Gibbs phase rule and Le Chatelier's principle:": "Направление изменений описывают правило фаз Гиббса и принцип Ле Шателье:",
    "Le Chatelier's principle states that when a system is displaced from equilibrium, changes occur in directions opposite to the forces that caused the displacement. For process engineering this helps determine which parameters should be changed to obtain the required production effect.": "Принцип Ле Шателье утверждает: если система выведена из равновесия внешним воздействием, изменения происходят в направлении, противоположном этому воздействию. Для инженерного анализа это помогает определить, какие параметры нужно изменить для получения нужного производственного эффекта.",
    "Any process can usually be implemented in several equipment variants. Selecting the most appropriate variant is optimization. The most common optimization criterion is the minimum cost of the product obtained in the process.": "Любой процесс обычно можно реализовать в нескольких аппаратурных вариантах. Выбор наиболее целесообразного варианта называют оптимизацией. Чаще всего критерием оптимизации считают минимальную стоимость продукта.",
    "New or improved production processes are first studied in laboratory units. Moving directly to full-scale equipment is expensive and risky. However, the transition from a laboratory unit to production scale often changes the process behavior because apparatus scale strongly affects the process. Therefore, pilot units are used between laboratory and production tests.": "Новые или усовершенствованные производственные процессы сначала изучают на лабораторных установках. Непосредственный переход к промышленному аппарату дорог и рискован. При переходе к производственному масштабу поведение процесса часто меняется, поэтому между лабораторными и промышленными испытаниями используют пилотные установки.",
    "Similarity theory answers how a model should be shaped and sized so that its results can be applied to the full-scale apparatus. It also indicates which quantities should be measured, how experimental data should be processed, and how to construct a model similar to the original.": "Теория подобия отвечает, какую форму и размеры должна иметь модель, чтобы ее результаты можно было перенести на промышленный аппарат. Она также указывает, какие величины измерять, как обрабатывать опытные данные и как строить модель, подобную оригиналу.",
    "The first similarity theorem states that similar phenomena have numerically equal similarity criteria. For geometric similarity:": "Первая теорема подобия утверждает, что подобные явления имеют численно равные критерии подобия. Для геометрического подобия:",
    "The generalized criterion of mechanical similarity is Newton's criterion:": "Обобщенным критерием механического подобия является критерий Ньютона:",
    "The second theorem states that any relationship between variables describing a phenomenon can be written as a relationship between similarity criteria:": "Вторая теорема утверждает, что любую зависимость между переменными, описывающими явление, можно представить как зависимость между критериями подобия:",
    "During technological processing, physicochemical properties of materials change. These data are needed to determine equipment dimensions, shape, construction, energy consumption and materials of construction.": "Во время технологической обработки физико-химические свойства материалов изменяются. Эти данные нужны для определения размеров, формы и конструкции аппаратов, расхода энергии и выбора конструкционных материалов.",
    "Composition can be expressed by mass, volume and mole fractions:": "Состав можно выражать массовыми, объемными и мольными долями:",
    "Density is needed in mass-flow equations, material balances and criteria such as Re, Eu and Ar:": "Плотность нужна в уравнениях массового расхода, материальных балансах и критериях Re, Eu, Ar:",
    "Viscosity is the resistance of liquids or gases to relative motion of their particles:": "Вязкость - это сопротивление жидкостей или газов взаимному перемещению их частиц:",
    "Thermal conductivity λ characterizes the ability of a substance to conduct heat. It depends on composition, temperature, pressure, density and moisture and appears in heat-transfer equations and the Nu and Pr criteria.": "Теплопроводность λ характеризует способность вещества проводить тепло. Она зависит от состава, температуры, давления, плотности и влажности и входит в уравнения теплообмена, а также в критерии Nu и Pr.",
    "Physicochemical boiling-point elevation is the increase in boiling temperature of a solution compared with the saturated vapor temperature of the solvent. At other pressures it is estimated by:": "Физико-химическая депрессия, или повышение температуры кипения раствора, означает превышение температуры кипения раствора над температурой насыщенного пара растворителя. При других давлениях ее оценивают по формуле:",
    "### Textbook Self-Check Questions": "### Вопросы и задания для самопроверки по учебнику",
    "- use equilibrium, the Gibbs phase rule and Le Chatelier's principle to analyze process direction;": "- использовать понятия равновесия, правило фаз Гиббса и принцип Ле Шателье для анализа направления процесса;",
}


def main() -> None:
    content = PATH.read_text(encoding="utf-8")
    for source, target in REPLACEMENTS.items():
        content = content.replace(source, target)
    PATH.write_text(content, encoding="utf-8", newline="\n")
    print(f"Cleaned Russian translation: {PATH}")


if __name__ == "__main__":
    main()
