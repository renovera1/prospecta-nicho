"use client";

import type { BuilderStep } from "@/types/editor";

const steps: { id: BuilderStep; label: string }[] = [
  { id: "objective", label: "Objetivo" },
  { id: "segment", label: "Segmento" },
  { id: "region", label: "Regi?o" },
  { id: "profile", label: "Perfil" },
  { id: "fields", label: "Campos" },
  { id: "delivery", label: "Entrega" },
];

type Props = {
  current: BuilderStep;
  onSelect: (step: BuilderStep) => void;
};

export function EditorStepper({ current, onSelect }: Props) {
  const currentIndex = steps.findIndex((step) => step.id === current);

  return (
    <ol className="editor-stepper" aria-label="Etapas para montar sua base">
      {steps.map((step, index) => (
        <li key={step.id}>
          <button
            type="button"
            className="stepper-button"
            data-active={step.id === current}
            data-complete={index < currentIndex}
            onClick={() => onSelect(step.id)}
            aria-current={step.id === current ? "step" : undefined}
          >
            <span>{index + 1}</span>
            {step.label}
          </button>
        </li>
      ))}
    </ol>
  );
}
