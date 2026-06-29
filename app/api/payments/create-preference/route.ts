import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  productSlug: z.string().min(2),
  customerName: z.string().min(2).optional(),
  customerEmail: z.string().email().optional(),
});

export async function POST(request: Request) {
  const token = process.env.MERCADO_PAGO_ACCESS_TOKEN;
  const body = await request.json();
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, message: "Dados inválidos." }, { status: 400 });
  }

  if (!token) {
    return NextResponse.json(
      { ok: false, message: "MERCADO_PAGO_ACCESS_TOKEN não configurado. Use links públicos ou WhatsApp." },
      { status: 501 },
    );
  }

  return NextResponse.json(
    { ok: false, message: "Provider preparado. Implementar chamada Mercado Pago Checkout Pro com idempotência." },
    { status: 501 },
  );
}
