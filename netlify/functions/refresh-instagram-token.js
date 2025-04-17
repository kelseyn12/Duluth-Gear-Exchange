import fetch from 'node-fetch';

export const handler = async () => {
  try {
    const longToken = process.env.INSTAGRAM_GRAPH_ACCESS_TOKEN;
    const clientSecret = process.env.INSTAGRAM_CLIENT_SECRET;
    const siteId = process.env.MY_SITE_ID;
    const netlifyAuth = process.env.NETLIFY_AUTH_TOKEN;

    console.log("🔁 Refreshing token with:", longToken.slice(0, 10) + "...");

    const refreshRes = await fetch(`https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${longToken}`);
    const refreshData = await refreshRes.json();

    console.log("📬 IG refresh response:", refreshData);

    if (!refreshData.access_token) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to refresh Instagram token', refreshData }),
      };
    }

    const newToken = refreshData.access_token;

    console.log("🔑 New token acquired, updating Netlify ENV...");

    const updateRes = await fetch(`https://api.netlify.com/api/v1/sites/${siteId}/env/INSTAGRAM_GRAPH_ACCESS_TOKEN`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${netlifyAuth}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value: newToken }),
    });

    const updateData = await updateRes.json();
    console.log("✅ ENV update response:", updateData);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Token refreshed and updated', updateData }),
    };
  } catch (err) {
    console.error("❌ Caught error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error', details: err.message }),
    };
  }
};

