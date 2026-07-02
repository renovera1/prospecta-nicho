const sensitiveKeyPattern = /(token|secret|password|authorization|cookie|key|email|whatsapp|phone|telefone|cpf|cnpj)/i;

export function maskValue(value: unknown): unknown {
  if (typeof value !== "string") return value;
  if (value.length <= 4) return "***";
  return `${value.slice(0, 2)}***${value.slice(-2)}`;
}

export function redactPayload<T>(payload: T): T {
  if (!payload || typeof payload !== "object") return payload;
  if (Array.isArray(payload)) return payload.map((item) => redactPayload(item)) as T;

  const redacted: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(payload as Record<string, unknown>)) {
    redacted[key] = sensitiveKeyPattern.test(key) ? maskValue(value) : redactPayload(value);
  }
  return redacted as T;
}

export const logger = {
  info(event: string, payload: Record<string, unknown> = {}) {
    console.info(event, redactPayload(payload));
  },
  warn(event: string, payload: Record<string, unknown> = {}) {
    console.warn(event, redactPayload(payload));
  },
  error(event: string, payload: Record<string, unknown> = {}) {
    console.error(event, redactPayload(payload));
  },
};
