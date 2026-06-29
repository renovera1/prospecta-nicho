type LegacyFrameProps = {
  src: string;
  title: string;
};

export function LegacyFrame({ src, title }: LegacyFrameProps) {
  return (
    <main className="legacy-frame-page">
      <iframe className="legacy-frame" src={src} title={title} />
    </main>
  );
}
