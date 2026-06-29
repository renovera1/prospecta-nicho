"use client";

type Props = {
  title: string;
  note?: string;
  options: readonly string[];
  selected: string[];
  onChange: (selected: string[]) => void;
};

export function FieldSelector({ title, note, options, selected, onChange }: Props) {
  function toggle(option: string) {
    if (selected.includes(option)) {
      onChange(selected.filter((item) => item !== option));
      return;
    }
    onChange([...selected, option]);
  }

  return (
    <fieldset className="field-selector">
      <legend>{title}</legend>
      {note ? <p>{note}</p> : null}
      <div className="check-grid">
        {options.map((option) => (
          <label key={option}>
            <input type="checkbox" checked={selected.includes(option)} onChange={() => toggle(option)} />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
