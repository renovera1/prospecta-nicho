import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  whatsapp: z.string().min(8),
  niche: z.string().min(2),
  city: z.string().min(2),
  email: z.string().email().optional(),
  goal: z.string().optional(),
  consent: z.boolean().optional(),
  source: z.string().optional(),
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, message: "Dados invalidos." }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    message: "Amostra solicitada. Integre Resend e Supabase para notificar e registrar.",
  });
}
