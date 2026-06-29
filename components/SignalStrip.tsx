import { Building2, MapPin, ScanSearch, SlidersHorizontal, Sparkles } from "lucide-react";

const signals = [
  { label: "Empresas recém-abertas", icon: Building2 },
  { label: "Segmentos específicos", icon: ScanSearch },
  { label: "Regiões estratégicas", icon: MapPin },
  { label: "Porte e perfil comercial", icon: SlidersHorizontal },
  { label: "Recortes sob demanda", icon: Sparkles },
];

export function SignalStrip() {
  return (
    <section className="signal-strip">
      <div className="container">
        <p className="signal-title">CRITÉRIOS QUE VIRAM OPORTUNIDADE</p>
        <div className="signal-chips">
          {signals.map((signal) => (
            <span key={signal.label}>
              <signal.icon size={17} />
              {signal.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
