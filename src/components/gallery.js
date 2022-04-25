import React from 'react';

const Gallery = ({ className, images }) => (
    <div className={`tw-mx-auto ${className}`}>
        <div className="tw-grid tw-grid-cols-3 tw-gap-4">
            {images.map((image) => (
                <a href={image} key={image} target="_blank" rel="noreferrer">
                    <img className="tw-block tw-object-cover tw-object-center tw-w-full tw-h-full tw-rounded-md" src={image} alt="gallery" />
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
