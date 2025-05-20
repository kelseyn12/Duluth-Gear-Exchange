const fs = require("fs");
const path = require("path");

exports.onPostBuild = async () => {
  const INSTAGRAM_GRAPH_API = `https://graph.facebook.com/v16.0/${process.env.INSTAGRAM_BUSINESS_ID}/media?fields=id,caption,media_url,permalink&access_token=${process.env.INSTAGRAM_GRAPH_ACCESS_TOKEN}`;

  console.log("Fetching Instagram data from API:", INSTAGRAM_GRAPH_API);

  try {
    const response = await fetch(INSTAGRAM_GRAPH_API);
    const data = await response.json();

    if (data.error) {
      console.error("Error from Instagram API:", data.error);
      return;
    }

    console.log("Fetched Instagram data:", data);

    if (data.data) {
      const outputPath = path.join(__dirname, "public", "instagram-posts.json");
      fs.writeFileSync(outputPath, JSON.stringify(data.data, null, 2));
      console.log("Instagram posts successfully saved to:", outputPath);
    } else {
      console.warn("No Instagram posts found.");
    }
  } catch (error) {
    console.error("Error fetching Instagram data:", error);
  }
};
