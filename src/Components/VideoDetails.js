import React from "react";

export default function VideoDetails({ video }) {
  if (!video) {
    return <div>Loading...</div>;
  }
  const vidSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="Video player" src={vidSrc} />
      </div>
      <div className="ui segment">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
}
