type Props = {
  eyebrow?: string;
  title: string;
  text?: string;
};

export function SectionTitle({ eyebrow, title, text }: Props) {
  return (
    <div style={{ marginBottom: 30 }}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="h2">{title}</h2>
      {text ? <p className="lead">{text}</p> : null}
    </div>
  );
}
