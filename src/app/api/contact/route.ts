import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, business_name, phone, business_type, email, message } = body;

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Visible Kerala Web <onboarding@resend.dev>',
      to: ['visiblekerala@gmail.com'],
      subject: `🔔 New Lead from Visible Kerala: ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-top: 0;">New Lead Details</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tbody>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; width: 35%; color: #475569;">Name</td>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${name || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Business Name</td>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${business_name || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Phone/WhatsApp</td>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${phone || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Business Type</td>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${business_type || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Email</td>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${email || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; color: #475569; vertical-align: top;">Message</td>
                <td style="padding: 10px; color: #0f172a; white-space: pre-wrap;">${message || 'N/A'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
