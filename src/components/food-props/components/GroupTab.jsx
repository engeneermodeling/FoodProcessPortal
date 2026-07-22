export default function GroupTab({ group, locale, active, onClick }) {
  const name = group.name[locale] || group.name.uk;
  return (
    <button
      className={`fp-group-tab ${active ? "active" : ""}`}
      style={{ "--g-color": group.color }}
      onClick={onClick}
    >
      <span className="fp-group-icon">{group.icon}</span>
      <span className="fp-group-name">{name}</span>
    </button>
  );
}
