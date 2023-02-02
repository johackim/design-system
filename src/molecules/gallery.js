import React from 'react';

const Gallery = ({ className, images }) => (
    <div className={`mx-auto ${className}`}>
        <div className="grid grid-cols-3 gap-4">
            {images.map((image) => (
                <a href={image} key={image} target="_blank" rel="noreferrer">
                    <img className="block object-cover object-center w-full h-full rounded-md" src={image} alt="gallery" />
                </a>
            ))}
        </div>
    </div>
);

Gallery.defaultProps = {
    images: [],
    className: '',
};

export default Gallery;
