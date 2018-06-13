import React, { Fragment } from 'react';

const Player = ({ selectedVideo }) => {
  //can put loading spinner in the future instead
  if (!selectedVideo) {
    return <div>loading...</div>
  }

  const videoId = selectedVideo.id.videoId;
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <Fragment>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={videoUrl} title={selectedVideo.snippet.title} allowFullScreen></iframe>
      </div>
      <div className="boxing">
      <h2>{selectedVideo.snippet.title}</h2>
      <p>{selectedVideo.snippet.description}</p>
      </div>
    </Fragment>
  )
}

export default Player;
