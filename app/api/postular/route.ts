import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre_apoderado, correo, telefono, nombre_cadete, edad_cadete, mensaje } = body;

    // Validación básica de campos requeridos
    if (!nombre_apoderado || !correo || !telefono || !nombre_cadete || !edad_cadete) {
      return NextResponse.json(
        { error: "Por favor completa todos los campos requeridos." },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://zglwwmagplxcdoorriap.supabase.co";
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseKey || supabaseKey === "tu_anon_key_aqui") {
      return NextResponse.json(
        { error: "Falta configurar la clave NEXT_PUBLIC_SUPABASE_ANON_KEY en .env.local" },
        { status: 500 }
      );
    }

    // Insertar en la tabla public.postulaciones vía REST API de Supabase
    const response = await fetch(`${supabaseUrl}/rest/v1/postulaciones`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        nombre_apoderado,
        correo,
        telefono,
        nombre_cadete,
        edad_cadete: Number(edad_cadete),
        mensaje: mensaje || "",
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error al insertar postulación en Supabase:", errorText);
      return NextResponse.json(
        { error: "No se pudo registrar la postulación. Verifica la tabla en Supabase." },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, message: "Postulación recibida exitosamente." });
  } catch (error) {
    console.error("Error en API Route /api/postular:", error);
    return NextResponse.json(
      { error: "Ocurrió un error inesperado al procesar la solicitud." },
      { status: 500 }
    );
  }
}
