export async function GET(request) {
    const url = new URL(request.url);
    const query = url.searchParams.get("query");
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  
    if (!query) {
      return new Response(JSON.stringify({ error: "Query is required" }), {
        status: 400,
      });
    }
  
    const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${apiKey}`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      return new Response(JSON.stringify(data), {
        status: 200,
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
        status: 500,
      });
    }
  }
  