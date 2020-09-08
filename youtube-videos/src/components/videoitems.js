import './videoitem.css'
import React from 'react'

const VideoItem = ({item}) => {
    return(
        <div className='video-item item'>
            <img className='ui image' alt={item} src={item.snippet.thumbnails.medium.url} />
            <div className='content'>
                <div className='header'>
                    {item.snippet.title} 
                </div>
            </div>      
        </div>
    )
}

export default VideoItem