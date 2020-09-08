import React from 'react'
import VideoItem from './videoitems'


const VideoList = ({videos}) => {

    const renderedList = videos.map((video) => {
        return <VideoItem  item={video}/>
    })

    return(
        <div className='ui relaxed divided list' style={{marginBottom: '5px'}}>
            {renderedList}
        </div>
    )
}


export default VideoList