import { NextResponse } from "next/server";
import { z } from "zod";
import { getConfiguredPaymentProvider } from "@/lib/payments/provider";
import { getProduct } from "@/lib/site";

const schema = z.object({
  productSlug: z.string().min(2),
  customerName: z.string().min(2).optional(),
  customerEmail: z.string().email().optional(),
  orderId: z.string().optional(),
  idempotencyKey: z.string().optional(),
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, message: "Dados inválidos." }, { status: 400 });
  }

  const product = getProduct(parsed.data.productSlug);
  if (!product) {
    return NextResponse.json({ ok: false, message: "Produto não encontrado." }, { status: 404 });
  }

  if (product.slug === "base-personalizada") {
    return NextResponse.json(
      { ok: false, message: "Base personalizada exige validação de recorte antes da cobrança." },
      { status: 409 },
    );
  }

  const provider = getConfiguredPaymentProvider();
  if (!provider) {
    return NextResponse.json(
      { ok: false, message: "Nenhum provider de pagamento configurado. Use link público do produto ou WhatsApp." },
      { status: 501 },
    );
  }

  return NextResponse.json(
    {
      ok: false,
      provider,
      idempotencyKey: parsed.data.idempotencyKey || parsed.data.orderId || null,
      message: "Provider preparado. Ative a chamada real do checkout no backend com validação e idempotência.",
    },
    { status: 501 },
  );
}
