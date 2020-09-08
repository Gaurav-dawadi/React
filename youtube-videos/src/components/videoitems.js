import './videoitem.css'
import React from 'react'

const VideoItem = ({item, onVideoSelect}) => {
    return(
        <div onClick={() => onVideoSelect(item)} className='video-item item'>
            <img 
                className='ui image' 
                alt={item.snippet.title} 
                src={item.snippet.thumbnails.medium.url}
            />
            <div className='content'>
                <div className='header'>
                    {item.snippet.title} 
                </div>
            </div>      
        </div>
    )
}

export default VideoItem