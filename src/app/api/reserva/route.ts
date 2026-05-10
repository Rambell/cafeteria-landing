// import { NextRequest, NextResponse } from "next/server";
// import { Resend } from "resend";



// export async function POST(req: NextRequest) {
//   const resend = new Resend(process.env.RESEND_API_KEY);
//   try {
//     const body = await req.json();
//     const { nombre, email, telefono, fecha, hora, personas, mensaje } = body;

//     await resend.emails.send({
//       from: "Menta & Café <reservas@mentaycafe.cl>",
//       to: ["hola@mentaycafe.cl"],
//       subject: `Nueva reserva — ${nombre} para ${personas} personas el ${fecha}`,
//       html: `
//         <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #F5F0E8; border-radius: 16px;">
//           <h2 style="color: #2C2416; font-size: 24px; margin-bottom: 24px;">Nueva reserva recibida 🌿</h2>
          
//           <table style="width: 100%; border-collapse: collapse;">
//             <tr style="border-bottom: 1px solid #E8E0D0;">
//               <td style="padding: 12px 0; color: #2C241699; font-size: 14px;">Nombre</td>
//               <td style="padding: 12px 0; color: #2C2416; font-size: 14px; font-weight: 500;">${nombre}</td>
//             </tr>
//             <tr style="border-bottom: 1px solid #E8E0D0;">
//               <td style="padding: 12px 0; color: #2C241699; font-size: 14px;">Email</td>
//               <td style="padding: 12px 0; color: #2C2416; font-size: 14px; font-weight: 500;">${email}</td>
//             </tr>
//             <tr style="border-bottom: 1px solid #E8E0D0;">
//               <td style="padding: 12px 0; color: #2C241699; font-size: 14px;">Teléfono</td>
//               <td style="padding: 12px 0; color: #2C2416; font-size: 14px; font-weight: 500;">${telefono}</td>
//             </tr>
//             <tr style="border-bottom: 1px solid #E8E0D0;">
//               <td style="padding: 12px 0; color: #2C241699; font-size: 14px;">Fecha</td>
//               <td style="padding: 12px 0; color: #2C2416; font-size: 14px; font-weight: 500;">${fecha}</td>
//             </tr>
//             <tr style="border-bottom: 1px solid #E8E0D0;">
//               <td style="padding: 12px 0; color: #2C241699; font-size: 14px;">Hora</td>
//               <td style="padding: 12px 0; color: #2C2416; font-size: 14px; font-weight: 500;">${hora} hrs</td>
//             </tr>
//             <tr style="border-bottom: 1px solid #E8E0D0;">
//               <td style="padding: 12px 0; color: #2C241699; font-size: 14px;">Personas</td>
//               <td style="padding: 12px 0; color: #2C2416; font-size: 14px; font-weight: 500;">${personas}</td>
//             </tr>
//             ${mensaje ? `
//             <tr>
//               <td style="padding: 12px 0; color: #2C241699; font-size: 14px;">Mensaje</td>
//               <td style="padding: 12px 0; color: #2C2416; font-size: 14px; font-weight: 500;">${mensaje}</td>
//             </tr>
//             ` : ""}
//           </table>

//           <div style="margin-top: 32px; padding: 16px; background: #4A7C5920; border-radius: 12px;">
//             <p style="color: #4A7C59; font-size: 13px; margin: 0;">
//               Responde a este email para confirmar o contactar al cliente directamente.
//             </p>
//           </div>
//         </div>
//       `,
//     });

//     // Email de confirmación al cliente
//     await resend.emails.send({
//       from: "Menta & Café <reservas@mentaycafe.cl>",
//       to: [email],
//       subject: "Reserva recibida — Menta & Café ☕",
//       html: `
//         <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #F5F0E8; border-radius: 16px;">
//           <h2 style="color: #2C2416; font-size: 24px; margin-bottom: 8px;">¡Hola, ${nombre}! 🌿</h2>
//           <p style="color: #2C241699; font-size: 15px; margin-bottom: 24px;">
//             Recibimos tu reserva y te confirmaremos en menos de 24 horas.
//           </p>

//           <div style="background: #fff; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
//             <p style="color: #2C241699; font-size: 13px; margin: 0 0 4px;">Fecha y hora</p>
//             <p style="color: #2C2416; font-size: 18px; font-weight: 600; margin: 0;">${fecha} a las ${hora} hrs</p>
//           </div>

//           <div style="background: #fff; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
//             <p style="color: #2C241699; font-size: 13px; margin: 0 0 4px;">Personas</p>
//             <p style="color: #2C2416; font-size: 18px; font-weight: 600; margin: 0;">${personas} ${Number(personas) === 1 ? "persona" : "personas"}</p>
//           </div>

//           <div style="background: #fff; border-radius: 12px; padding: 24px; margin-bottom: 32px;">
//             <p style="color: #2C241699; font-size: 13px; margin: 0 0 4px;">Ubicación</p>
//             <p style="color: #2C2416; font-size: 15px; font-weight: 500; margin: 0;">Av. Providencia 1234, Providencia, Santiago</p>
//           </div>

//           <p style="color: #2C241699; font-size: 13px; text-align: center;">
//             ¿Necesitas cancelar o modificar? Escríbenos a 
//             <a href="mailto:hola@mentaycafe.cl" style="color: #4A7C59;">hola@mentaycafe.cl</a>
//           </p>
//         </div>
//       `,
//     });

//     return NextResponse.json({ ok: true });
//   } catch (error) {
//     console.error("Error enviando email:", error);
//     return NextResponse.json({ error: "Error interno" }, { status: 500 });
//   }
// }