import React from 'react';

const VideoListItem = ({ video, videoSelect }) => {
  return (
    <li onClick={() => videoSelect(video)}>
      <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
    </li>
  )
};

export default VideoListItem;
