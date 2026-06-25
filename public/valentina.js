(function(){
var cid=localStorage.getItem('chat_uid')||(Date.now().toString(36)+Math.random().toString(36).slice(2,8));
localStorage.setItem('chat_uid',cid);
var d=document.createElement('div');
d.innerHTML='<button id="vbtn" style="position:fixed;bottom:24px;right:24px;width:56px;height:56px;border-radius:50%;background:#1a4b8c;color:white;border:none;cursor:pointer;z-index:9999;box-shadow:0 4px 15px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg></button>';
document.body.appendChild(d);
var b=document.getElementById('vbtn');
b.onclick=function(){
var p=document.createElement('div');p.id='vpanel';
p.innerHTML='<div style="position:fixed;bottom:96px;right:24px;width:340px;height:520px;background:white;border-radius:16px;box-shadow:0 8px 32px rgba(0,0,0,0.2);z-index:9999;overflow:hidden;display:flex;flex-direction:column"><div style="background:#1a4b8c;color:white;padding:16px 20px;display:flex;align-items:center;gap:12px"><div style="width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:16px">V</div><div><p style="margin:0;font-weight:600;font-size:14px">Valentina</p><p style="margin:0;font-size:12px;opacity:0.7">Online</p></div><span onclick="document.getElementById('vpanel').remove();this.closest('div').style.display='none'" style="margin-left:auto;cursor:pointer;font-size:18px;opacity:0.7">&#10005;</span></div><div id="vmsgs" style="flex:1;overflow-y:auto;padding:16px;background:#f0f4f8"><div style="background:white;border-radius:12px 12px 12px 4px;padding:10px 14px;max-width:85%;font-size:14px;color:#374151;box-shadow:0 1px 3px rgba(0,0,0,0.08);margin-bottom:8px">&#161;Hola! &#128075; Soy Valentina, asistente de la Dra. Reyna. &#191;En qu&#233; puedo ayudarte?</div></div><div style="border-top:1px solid #e5e7eb;padding:12px;display:flex;gap:8px;background:white"><input id="vinp" placeholder="Escribe tu mensaje..." style="flex:1;padding:10px 16px;border:1px solid #d1d5db;border-radius:24px;font-size:14px;outline:none"/><button id="vsend" style="width:40px;height:40px;border-radius:50%;background:#1a4b8c;color:white;border:none;cursor:pointer;font-size:18px">&#8594;</button></div></div>';
document.body.appendChild(p);
b.style.display='none';
var close=p.querySelector('[onclick]');
if(close)close.onclick=function(){p.remove();b.style.display='flex';};
var inp=document.getElementById('vinp'),msgs=document.getElementById('vmsgs'),send=document.getElementById('vsend');
send.onclick=async function(){var m=inp.value.trim();if(!m)return;inp.value='';
msgs.innerHTML+='<div style="display:flex;justify-content:flex-end;margin-bottom:8px"><div style="background:#1a4b8c;color:white;border-radius:12px 12px 4px 12px;padding:10px 14px;max-width:85%;font-size:14px">'+m.replace(/</g,'&lt;')+'</div></div>';
try{var r=await(await fetch("https://clinicadrareyna-crm-api.onrender.com/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:m,history:[],channel_id:cid,phone:""})})).json();var reply=r.response||"Disculpa, no pude procesar tu mensaje.";}
catch(e){var reply="Error de conexi&#243;n. Intenta de nuevo.";}
msgs.innerHTML+='<div style="display:flex;justify-content:flex-start;margin-bottom:8px"><div style="background:white;border-radius:12px 12px 12px 4px;padding:10px 14px;max-width:85%;font-size:14px;color:#374151;box-shadow:0 1px 3px rgba(0,0,0,0.08)">'+reply+'</div></div>';
msgs.scrollTop=msgs.scrollHeight;};
inp.onkeydown=function(e){if(e.key==='Enter')send.click();};};
})();
