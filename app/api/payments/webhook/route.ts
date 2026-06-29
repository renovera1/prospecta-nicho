import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const secret = process.env.MERCADO_PAGO_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json({ ok: false, message: "Webhook secret não configurado." }, { status: 501 });
  }

  await request.text();
  return NextResponse.json({ ok: true, message: "Webhook recebido. Validar assinatura e registrar status do pedido." });
}
