import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "RESEND_API_KEY nicht konfiguriert" });
  }

  const { subject, body, replyTo, attachments } = req.body;

  const payload: any = {
    from: "Platzhelden24 <onboarding@resend.dev>",
    to: ["info@platzhelden24.de"],
    reply_to: replyTo || undefined,
    subject,
    text: body,
  };

  if (attachments && attachments.length > 0) {
    payload.attachments = attachments.map((att: any) => ({
      filename: att.filename,
      content: att.content,
    }));
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const err = await response.text();
    return res.status(500).json({ error: err });
  }

  return res.status(200).json({ success: true });
}
