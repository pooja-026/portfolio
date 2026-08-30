import { RESUME_CONTEXT } from "../../../data/resume";

export async function POST(req) {
  const { messages } = await req.json();

  if (!process.env.OPENAI_API_KEY) {
    return Response.json(
      { error: "Server is missing OPENAI_API_KEY. Add it in Vercel project settings." },
      { status: 500 }
    );
  }

  // Basic guardrails: cap history length and message size sent upstream.
  const trimmed = (messages || []).slice(-10).map((m) => ({
    role: m.role === "assistant" ? "assistant" : "user",
    content: String(m.content || "").slice(0, 2000),
  }));

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        max_output_tokens: 300,
        instructions: RESUME_CONTEXT,
        input: trimmed,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("OpenAI chat request failed", response.status, detail);
      return Response.json({ error: "The AI service could not complete the request." }, { status: 502 });
    }

    const data = await response.json();
    const reply =
      data?.output
        ?.flatMap((item) => item.type === "message" ? item.content || [] : [])
        .find((item) => item.type === "output_text")?.text ||
      "Sorry, I couldn't generate a response just now.";

    return Response.json({ reply });
  } catch (err) {
    return Response.json({ error: "Failed to reach the model." }, { status: 500 });
  }
}
