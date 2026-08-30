import { fmt } from "../utils/fmt.js";

export default function DataTable({ product, locale }) {
  if (!product) return null;

  const note = product.note ? product.note[locale] || product.note.uk : null;
  const source = product.source;
  const equations = product.equations || [];
  const ui = {
    title: locale === "en" ? "Equations" : locale === "de" ? "Gleichungen" : "Рівняння",
    range: locale === "en" ? "Range" : locale === "de" ? "Bereich" : "Діапазон",
    fit: locale === "en" ? "Fit" : locale === "de" ? "Anpassung" : "Апроксимація",
  };

  return (
    <div className="fp-data-section animate-in">
      <div className="fp-table-header">
        <h3 className="fp-product-title">{product.name[locale] || product.name.uk}</h3>
        {note && <div className="fp-product-note">{note}</div>}
      </div>

      <div className="fp-table-wrap">
        <table className="fp-table">
          <thead>
            <tr>
              {product.cols.map((col, i) => (
                <th key={i}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {product.data.map((row, ri) => (
              <tr key={ri}>
                {row.map((val, ci) => (
                  <td key={ci} className={ci === 0 ? "fp-col-first" : ""}>
                    {fmt(val, product.digits[ci])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {equations.length > 0 && (
        <div className="fp-equations">
          <div className="fp-equations-title">{ui.title}</div>
          {equations.map((eq, i) => {
            const description = eq.description?.[locale] || eq.description?.uk;
            const variables = eq.variables?.[locale] || eq.variables?.uk;
            const range = eq.range?.[locale] || eq.range?.uk || eq.range;

            return (
              <div className="fp-equation" key={i}>
                <div className="fp-equation-head">
                  <span>{eq.label?.[locale] || eq.label?.uk || eq.label}</span>
                  {range && <span>{ui.range}: {range}</span>}
                </div>
                <code>{eq.formula}</code>
                {(description || variables || eq.r2) && (
                  <div className="fp-equation-meta">
                    {description && <span>{description}</span>}
                    {variables && <span>{variables}</span>}
                    {eq.r2 && <span>{ui.fit}: R²={fmt(eq.r2, 4)}</span>}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      <div className="fp-source">
        <span className="fp-source-label">
          {locale === "en" ? "Source:" : locale === "de" ? "Quelle:" : "Джерело:"}
        </span>{" "}
        {source}
      </div>
    </div>
  );
}
