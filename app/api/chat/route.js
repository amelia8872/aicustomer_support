import { NextResponse } from "next/server";
import OpenAI from "openai";

const systemPrompt = `HeadStarter Project`;

export async function POST(req) {
  const openai = new OpenAI();
  const data = await req.json();

  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: systemPrompt }, ...data],
    model: "gpt-4o-mini",
  });

  // console.log(completion.choices[0].message.content);
  // console.log(data);

  return NextResponse.json(
    { message: completion.choices[0].message.content },
    { status: 200 }
  );
}
