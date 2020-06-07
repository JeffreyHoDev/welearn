import React from 'react';
import './video.css';
import ReactPlayer from 'react-player';

const VideoPlayer = (props) => {
    return (
        <div className = "container">
            <ReactPlayer url={props.url} controls={true} />
            <div className="describe">
                <div className="title">{props.title}</div>
                <div className="description">{props.description}</div>
            </div>
        </div>
    )
}

export default VideoPlayer;