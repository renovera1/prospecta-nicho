export function PreviewBanner() {
  if (process.env.NEXT_PUBLIC_DEPLOY_ENV !== "preview") return null;

  return (
    <div className="preview-banner" role="status">
      Ambiente de validação - alterações ainda podem estar em revisão.
    </div>
  );
}
