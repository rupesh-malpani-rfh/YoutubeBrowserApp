import React from 'react';
// import './VideoItem.css';

const VideoItem = (props) => {
    return (                
        <div className="video-item item" style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
            <img className="ui image" src={props.video.snippet.thumbnails.medium.url} style={{maxWidth: '180'}} />
            <div className="content">
                <div className="header">{props.video.snippet.title}</div>
                <div className="description">Updated 10 mins ago</div>
            </div>
        </div>        
    )
}

export default VideoItem;