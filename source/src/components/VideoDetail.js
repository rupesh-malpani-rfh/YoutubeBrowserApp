import React from 'react';

const VideoDetail = (props) => {
    if(!props.video) {
        return 'Loading...'
    }

    const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;
    // console.log("videoSrc", videoSrc);
    
    return (
        <div>
            <div className="ui embed">
                <iframe title="video player" src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4>{props.video.snippet.title}</h4>
                <p>{props.video.snippet.description}</p>
            </div>
        </div>
        
    );
}

export default VideoDetail