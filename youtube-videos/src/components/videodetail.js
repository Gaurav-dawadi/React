import React from 'react'


const VideoDetail = ({video}) => {

    if(!video){
        return(
            <div>Loading....</div>
        )
    }

    return (
        <div>
            <div className='ui embed'>
                <iframe 
                    title='videoplayer'
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                />
            </div>
            <div className='ui segment'>
                <h4>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail