import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

interface ContactData {
  name: string;
  phone: string;
  email?: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as ContactData;

    if (!body.name || !body.phone) {
      return NextResponse.json(
        { success: false, message: "Nome e WhatsApp são obrigatórios." },
        { status: 400 }
      );
    }

    // Basic input length validation
    if (body.name.length > 200 || body.phone.length > 30) {
      return NextResponse.json(
        { success: false, message: "Dados inválidos." },
        { status: 400 }
      );
    }

    const contact = {
      name: body.name.trim(),
      phone: body.phone.trim(),
      email: (body.email || "").trim(),
      message: (body.message || "").trim().slice(0, 2000),
      createdAt: new Date().toISOString(),
    };

    const filePath = path.join(process.cwd(), "contatos.json");

    let contacts: typeof contact[] = [];
    try {
      const data = await fs.readFile(filePath, "utf-8");
      contacts = JSON.parse(data);
    } catch {
      // File doesn't exist yet
    }

    contacts.push(contact);
    await fs.writeFile(filePath, JSON.stringify(contacts, null, 2), "utf-8");

    return NextResponse.json({
      success: true,
      message: "Mensagem recebida! Te respondo em até 2h.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Erro interno. Tente novamente." },
      { status: 500 }
    );
  }
}
