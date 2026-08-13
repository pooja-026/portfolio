import { RESUME_CONTEXT } from "../../../data/resume";

export async function POST(req) {
  const { messages } = await req.json();

  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json(
      { error: "Server is missing ANTHROPIC_API_KEY. Add it in Vercel project settings." },
      { status: 500 }
    );
  }

  // Basic guardrails: cap history length and message size sent upstream.
  const trimmed = (messages || []).slice(-10).map((m) => ({
    role: m.role === "assistant" ? "assistant" : "user",
    content: String(m.content || "").slice(0, 2000),
  }));

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 300,
        system: RESUME_CONTEXT,
        messages: trimmed,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      return Response.json({ error: `Anthropic API error: ${errText}` }, { status: 502 });
    }

    const data = await response.json();
    const reply =
      data?.content?.find((c) => c.type === "text")?.text ||
      "Sorry, I couldn't generate a response just now.";

    return Response.json({ reply });
  } catch (err) {
    return Response.json({ error: "Failed to reach the model." }, { status: 500 });
  }
}
