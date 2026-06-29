import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
  whatsapp: z.string().min(8),
  niche: z.string().min(2),
  city: z.string().min(2),
  state: z.string().optional(),
  cnae: z.string().optional(),
  quantity: z.string().optional(),
  goal: z.string().min(5),
  notes: z.string().optional(),
  consent: z.literal(true),
  companySite: z.string().max(0).optional(),
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success || parsed.data.companySite) {
    return NextResponse.json({ ok: false, message: "Dados inválidos." }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    message: "Contato recebido. Integre RESEND_API_KEY e Supabase para persistir e notificar.",
  });
}
