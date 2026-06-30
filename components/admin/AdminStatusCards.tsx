export function AdminStatusCards({ items }: { items: { label: string; value: string; note?: string }[] }) {
  return (
    <div className="admin-stat-grid">
      {items.map((item) => (
        <article className="admin-stat" key={item.label}>
          <span>{item.label}</span>
          <strong>{item.value}</strong>
          {item.note ? <p>{item.note}</p> : null}
        </article>
      ))}
    </div>
  );
}
