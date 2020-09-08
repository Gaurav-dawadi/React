import React from 'react'
import VideoItem from './videoitems'


const VideoList = ({videos, onVideoSelect}) => {

    const renderedList = videos.map((video) => {
        return(
            <VideoItem
                key={video.id.videoId}
                item={video}
                onVideoSelect={onVideoSelect}
            />
        )
    })

    return(
        <div className='ui relaxed divided list' style={{marginBottom: '5px'}}>
            {renderedList}
        </div>
    )
}


export default VideoList