import { NextResponse } from 'next/server';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

export async function POST(req) {
  try {
    const data = await req.json();

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([595, 842]); // A4 size

    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontSize = 12;
    const lineHeight = 20;
    let y = 800;

    function drawText(text) {
      page.drawText(text, {
        x: 50,
        y,
        size: fontSize,
        font,
        color: rgb(0, 0, 0),
      });
      y -= lineHeight;
    }

    drawText(`${data.project_name}`);
    drawText(`This Agreement is made and entered into as of this ${data.contract_date},`);
    drawText(`between ${data.client_name} (Client) and ${data.commissioner_name} (Commissioner).`);
    y -= 10;
    drawText(`Project: ${data.project_name}`);
    drawText(`Specifications: ${data.project_specifications}`);
    y -= 10;
    drawText(`Prototype due: ${data.prototype_due_date}`);
    drawText(`Source code due: ${data.source_code_due_date}`);
    drawText(`Hardware (${data.hardware_name}) due: ${data.hardware_due_date}`);
    drawText(`Docs due: ${data.documentation_due_date}`);
    y -= 10;
    drawText(`Fee: P${data.project_fee}`);
    drawText(`Initial Payment: ${data.payment_1_amount}`);
    drawText(`Second Payment: ${data.payment_2_amount} by ${data.payment_2_date_range}`);
    drawText(`Third Payment: ${data.payment_3_amount} by ${data.payment_3_date_range}`);
    y -= 10;
    drawText(`Client Signature: ${data.client_signature}`);
    drawText(`Commissioner Signature: ${data.commissioner_signature}`);

    const pdfBytes = await pdfDoc.save();

    return new NextResponse(pdfBytes, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="contract.pdf"',
      },
    });
  } catch (error) {
    console.error('PDF generation failed:', error);
    return new NextResponse('Failed to generate PDF', { status: 500 });
  }
}
