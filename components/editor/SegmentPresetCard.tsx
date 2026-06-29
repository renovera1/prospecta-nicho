"use client";

import type { SegmentPreset } from "@/types/editor";

type Props = {
  preset: SegmentPreset;
  onApply: (preset: SegmentPreset) => void;
};

export function SegmentPresetCard({ preset, onApply }: Props) {
  return (
    <article className="preset-card">
      <div>
        <span className="badge">Preset inteligente</span>
        <h3 className="h3">{preset.title}</h3>
        <p>{preset.description}</p>
      </div>
      <div className="preset-cues">
        {preset.cues.map((cue) => (
          <span key={cue}>{cue}</span>
        ))}
      </div>
      <button className="button button--secondary" type="button" onClick={() => onApply(preset)}>
        Usar preset
      </button>
    </article>
  );
}
