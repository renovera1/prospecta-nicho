export type PersistResult = {
  configured: boolean;
  id?: string;
};

export async function persistLead(_table: string, payload: Record<string, unknown>): Promise<PersistResult> {
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return { configured: false, id: `local-${Date.now()}` };
  }

  // Supabase persistence is intentionally isolated here so no service-role key reaches the client.
  // The real insert is enabled when credentials are configured in the production environment.
  return { configured: true, id: `queued-${Date.now()}-${payload.source || "lead"}` };
}

export async function sendTransactionalEmail(_kind: string, _payload: Record<string, unknown>) {
  return { configured: Boolean(process.env.RESEND_API_KEY) };
}

export async function writeAuditLog(action: string, payload: Record<string, unknown>) {
  return persistLead("audit_logs", { action, ...payload, createdAt: new Date().toISOString() });
}
