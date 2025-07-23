import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const Instagram = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/.netlify/functions/getInstagramPosts")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Instagram data:", data);

        // Filter posts with valid media and limit to 6
        const filteredPosts = data
          .filter((post) => 
            post.media_url && 
            (post.media_url.includes(".jpg") || post.media_url.includes(".png") || post.media_url.includes(".mp4"))
          )
          .slice(0, 6);

        setPosts(filteredPosts);
      })
      .catch((error) => console.error("Error loading Instagram posts:", error));
  }, []);

  return (
    <div className="image-grid-container">
      {Array.isArray(posts) && posts.length > 0 ? (
        posts.map((post) => (
          <Container fluid className="picContainer" key={post.id}>
            <figure className="position-relative">
              <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                {post.media_url.includes(".mp4") ? (
                  <video controls className="video">
                    <source src={post.media_url} type="video/mp4" />
                    <track
                      src="captions.vtt"
                      kind="captions"
                      srclang="en"
                      label="English captions"
                      default
                    />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={post.media_url}
                    alt={post.caption || "Instagram post"}
                    className="image"
                    loading="lazy"
                  />
                )}
              </a>
              {post.caption && (
                <figcaption className="imgtext">
                  <p>{post.caption}</p>
                </figcaption>
              )}
            </figure>
          </Container>
        ))
      ) : (
        <p>Loading Instagram posts...</p>
      )}
    </div>
  );
};

export default Instagram;


