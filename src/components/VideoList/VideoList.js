import React from 'react';
import VideoPlayer from '../Videos/Video';

const VideoList = ({VideoCollection}) => {
    const allVideos = VideoCollection.map((video, i) => {
        return <VideoPlayer title={video.title} description={video.description} url={video.url} id={video.id} />
    })
    return (
        <div>
            {allVideos}
        </div>
        )
}

export default VideoList;