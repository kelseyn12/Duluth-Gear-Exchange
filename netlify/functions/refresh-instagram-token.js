import fetch from 'node-fetch';

export const handler = async () => {
  const longToken = process.env.INSTAGRAM_GRAPH_ACCESS_TOKEN;

  const refreshRes = await fetch(`https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${longToken}`);
  const refreshData = await refreshRes.json();

  if (!refreshData.access_token) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to refresh Instagram token', refreshData }),
    };
  }

  const newToken = refreshData.access_token;

  // Update Netlify ENV variable
  const updateRes = await fetch(`https://api.netlify.com/api/v1/sites/${process.env.MY_SITE_ID}/env/INSTAGRAM_GRAPH_ACCESS_TOKEN`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${process.env.NETLIFY_AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ value: newToken }),
  });

  const updateData = await updateRes.json();

    // Trigger Netlify site rebuild using Build Hook
await fetch(process.env.NETLIFY_BUILD_HOOK, {
    method: 'POST',
  });
  
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Token refreshed and updated and build triggered', updateData }),
  };
};
