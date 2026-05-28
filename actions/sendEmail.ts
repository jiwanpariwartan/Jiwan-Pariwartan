"use server";

import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  program: z.string().min(1, "Please select a program"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type SendEmailState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function sendEmail(
  formData: z.infer<typeof schema>
): Promise<SendEmailState> {
  const parsed = schema.safeParse(formData);

  if (!parsed.success) {
    return {
      success: false,
      message: "Please fix the errors below.",
      errors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const { name, email, phone, program, message } = parsed.data;

  // Use Resend if RESEND_API_KEY is set, otherwise log for development
  const apiKey = process.env.RESEND_API_KEY;

  if (apiKey) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);

      await resend.emails.send({
        from: "Jiwan Pariwartan Website <noreply@jiwanpariwartan.com>",
        to: process.env.CONTACT_EMAIL || "info@jiwanpariwartan.com",
        replyTo: email,
        subject: `New Enquiry: ${program} – ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #fafafa; border-radius: 12px;">
            <h2 style="color: #6B21A8; margin-bottom: 24px;">New Enquiry from Jiwan Pariwartan Website</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #666; width: 140px;">Name</td><td style="padding: 8px 0; color: #111; font-weight: 600;">${name}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0; color: #111;">${email}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Phone</td><td style="padding: 8px 0; color: #111;">${phone}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Program</td><td style="padding: 8px 0; color: #6B21A8; font-weight: 600;">${program}</td></tr>
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #fff; border-radius: 8px; border-left: 4px solid #6B21A8;">
              <p style="color: #666; margin: 0 0 8px 0; font-size: 13px;">Message:</p>
              <p style="color: #111; margin: 0; line-height: 1.6;">${message}</p>
            </div>
            <p style="margin-top: 24px; color: #999; font-size: 12px;">Sent from jiwanpariwartan.com</p>
          </div>
        `,
      });
    } catch {
      return {
        success: false,
        message: "Failed to send message. Please try calling us directly.",
      };
    }
  } else {
    // Development: log to console
    console.log("📧 Contact form submission:", { name, email, phone, program, message });
  }

  return {
    success: true,
    message:
      "Thank you for reaching out. A member of our team will contact you within 24 hours.",
  };
}
