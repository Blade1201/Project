import React from 'react'

const GalleryItem = ({ url }) => {
    return (
        <div className="gallery-item ">
            <img src={url} alt="galeria-kep"  style={{maxHeight:250, maxWidth:500}} />
        </div>
    )
}

export default GalleryItem;