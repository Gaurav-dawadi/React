import React from 'react'



const ImageBox = (props) => {

    const pics = props.image.map((pic) => {
        return <img key={pic.id} src={pic.urls.regular} alt={pic.description} />
    })
    
    return(
        <div>
            {pics}
        </div>
    )
}

export default ImageBox