exports.handler = async () => {
  const ACCESS_TOKEN = process.env.INSTAGRAM_GRAPH_ACCESS_TOKEN;
  const BUSINESS_ID = process.env.INSTAGRAM_BUSINESS_ID;
  const LIMIT = 6;

  if (!ACCESS_TOKEN || !BUSINESS_ID) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Missing env vars" }),
    };
  }

  const fields = "id,caption,media_url,media_type,permalink,timestamp";
  const url = `https://graph.facebook.com/v16.0/${BUSINESS_ID}/media?fields=${fields}&access_token=${ACCESS_TOKEN}&limit=${LIMIT}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.error) {
      console.error("Instagram API error:", data.error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: data.error.message }),
      };
    }

    const filtered = data.data.filter((post) =>
      ["IMAGE", "CAROUSEL_ALBUM", "VIDEO"].includes(post.media_type)
    );

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(filtered),
    };
  } catch (err) {
    console.error("Fetch failed:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Fetch failed" }),
    };
  }
};
