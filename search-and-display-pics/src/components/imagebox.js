import React from 'react'



const ImageBox = (props) => {

    const pics = props.image.map(({id, urls, description}) => {
        return <img key={id} src={urls.regular} alt={description} />
    })
    
    return(
        <div>
            {pics}
        </div>
    )
}

export default ImageBox