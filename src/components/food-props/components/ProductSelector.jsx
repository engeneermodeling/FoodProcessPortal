export default function ProductSelector({ products, locale, selectedId, onChange }) {
  return (
    <div className="fp-product-selector">
      {products.map((p) => (
        <button
          key={p.id}
          className={`fp-product-btn ${selectedId === p.id ? "active" : ""}`}
          onClick={() => onChange(p.id)}
        >
          {p.name[locale] || p.name.uk}
        </button>
      ))}
    </div>
  );
}
