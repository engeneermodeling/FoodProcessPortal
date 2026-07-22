export function fmt(val, digits) {
  if (val === null || val === undefined || val === "") return "—";
  if (typeof val === "string") return val;
  if (isNaN(val)) return "—";
  if (digits === null) return val;
  if (digits === 0) return Math.round(val).toString();
  return Number(val).toFixed(digits);
}
