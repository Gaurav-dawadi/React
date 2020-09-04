import './imagebox.css'
import React from 'react'
import ImageCard from './imagecard'


const ImageBox = (props) => {

    const pics = props.image.map( pic => {
        return <ImageCard key={pic.id} images={pic}/>
    })
    
    return(
        <div className='image-list'>
            {pics}
        </div>
    )
}

export default ImageBox