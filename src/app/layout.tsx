import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Centro Odontológico Dra. Reyna Pimentel | Expertos en crear sonrisas",
  description: "Centro Odontológico en Nagua, Rep. Dom. Especialistas en Diseño de Sonrisa, Ortodoncia, Endodoncia y más. Reconocidos por el SNS como mejor odontóloga zona Nordeste. ¡Agenda tu cita!",
  icons: {
    icon: "/images/logo-clinica.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
          <script dangerouslySetInnerHTML={{ __html: `
            var cw=document.createElement('div');cw.id='valentina-chat';
            cw.innerHTML='<button id="v-btn" style="position:fixed;bottom:24px;right:24px;width:56px;height:56px;border-radius:50%;background:#1a4b8c;color:white;border:none;cursor:pointer;z-index:50;box-shadow:0 4px 12px rgba(0,0,0,0.2);display:flex;align-items:center;justify-content:center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg></button><div id="v-panel" style="display:none;position:fixed;bottom:96px;right:24px;width:340px;height:500px;background:white;border-radius:16px;box-shadow:0 8px 32px rgba(0,0,0,0.15);z-index:50;overflow:hidden;flex-direction:column"><div style="background:#1a4b8c;color:white;padding:16px 20px;display:flex;align-items:center;gap:12px"><div style="width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;font-weight:bold">V</div><div><p style="margin:0;font-weight:600;font-size:14px">Valentina</p><p style="margin:0;font-size:12px;opacity:0.7">Online</p></div><button onclick="document.getElementById(\'v-panel\').style.display=\'none\';document.getElementById(\'v-btn\').style.display=\'flex\'" style="margin-left:auto;background:none;border:none;color:white;cursor:pointer">✕</button></div><div id="v-msgs" style="flex:1;overflow-y:auto;padding:16px;background:#f9fafb"><div style="background:white;border-radius:12px 12px 12px 4px;padding:10px 14px;max-width:85%;font-size:14px;color:#374151;box-shadow:0 1px 3px rgba(0,0,0,0.08)">¡Hola! 👋 Soy Valentina, asistente virtual de la Dra. Reyna. ¿En qué puedo ayudarte?</div></div><div style="border-top:1px solid #e5e7eb;padding:12px;display:flex;gap:8px;background:white"><input id="v-input" placeholder="Escribe tu mensaje..." style="flex:1;padding:8px 16px;border:1px solid #d1d5db;border-radius:24px;font-size:14px;outline:none" /><button id="v-send" style="width:40px;height:40px;border-radius:50%;background:#1a4b8c;color:white;border:none;cursor:pointer">→</button></div></div>';
            document.body.appendChild(cw);
            var btn=document.getElementById('v-btn'),panel=document.getElementById('v-panel'),input=document.getElementById('v-input'),msgs=document.getElementById('v-msgs'),send=document.getElementById('v-send');
            btn.onclick=function(){panel.style.display='flex';btn.style.display='none';}
            var api='https://clinicadrareyna-crm-api.onrender.com/api/chat';
            var cid=localStorage.getItem('chat_uid')||(Date.now().toString(36)+Math.random().toString(36).slice(2,8));localStorage.setItem('chat_uid',cid);
            send.onclick=async function(){var m=input.value.trim();if(!m)return;input.value='';
              msgs.innerHTML+='<div style="display:flex;justify-content:flex-end;margin-bottom:8px"><div style="background:#1a4b8c;color:white;border-radius:12px 12px 4px 12px;padding:10px 14px;max-width:85%;font-size:14px">'+m+'</div></div>';
              var d=await(await fetch(api,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:m,history:[],channel_id:cid,phone:''})})).json();
              var r=d.response||'Disculpa, no pude procesar tu mensaje.';
              msgs.innerHTML+='<div style="display:flex;justify-content:flex-start;margin-bottom:8px"><div style="background:white;border-radius:12px 12px 12px 4px;padding:10px 14px;max-width:85%;font-size:14px;color:#374151;box-shadow:0 1px 3px rgba(0,0,0,0.08)">'+r+'</div></div>';
              msgs.scrollTop=msgs.scrollHeight;}
            input.onkeydown=function(e){if(e.key==='Enter')send.click();}
          `}} />
      </body>
    </html>
  );
}
