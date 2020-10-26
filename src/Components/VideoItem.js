import React from "react";
import "../Components/VideoIten.css";
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      className="video-item item"
      onClick={() => {
        onVideoSelect(video);
      }}
    >
      <img
        className="ui image"
        alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">
          <p>{video.snippet.title}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
