import { persistLead, sendTransactionalEmail, writeAuditLog } from "@/lib/server/integrations";

export function createLead(table: string, payload: Record<string, unknown>) {
  return persistLead(table, payload);
}

export function createAuditLog(action: string, payload: Record<string, unknown>) {
  return writeAuditLog(action, payload);
}

export function sendEmail(kind: string, payload: Record<string, unknown>) {
  return sendTransactionalEmail(kind, payload);
}
