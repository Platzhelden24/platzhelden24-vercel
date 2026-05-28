interface Attachment {
  filename: string;
  content: string;
  contentType: string;
}

interface EmailData {
  subject: string;
  body: string;
  replyTo?: string;
  attachments?: Attachment[];
}

export async function sendEmailFn({ data }: { data: EmailData }) {
  const response = await fetch("/api/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(err);
  }

  return { success: true };
}
