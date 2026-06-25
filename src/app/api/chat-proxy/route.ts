export async function POST(request: Request) {
  try {
    const body = await request.json();
    const r = await fetch('https://clinicadrareyna-crm-api.onrender.com/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    const data = await r.json();
    return Response.json(data, {
      headers: { 'Access-Control-Allow-Origin': '*' }
    });
  } catch(e: any) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}

export async function OPTIONS() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
