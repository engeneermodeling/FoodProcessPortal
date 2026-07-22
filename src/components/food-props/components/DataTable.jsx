import { fmt } from "../utils/fmt.js";

export default function DataTable({ product, locale }) {
  if (!product) return null;

  const note = product.note ? product.note[locale] || product.note.uk : null;
  const source = product.source;

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

      <div className="fp-source">
        <span className="fp-source-label">
          {locale === "en" ? "Source:" : locale === "de" ? "Quelle:" : "Джерело:"}
        </span>{" "}
        {source}
      </div>
    </div>
  );
}
