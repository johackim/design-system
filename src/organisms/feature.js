import React from 'react';
import { BeakerIcon } from '@heroicons/react/outline';
import Heading from '@atoms/heading';

const Feature = ({ title, description, image, icon, reverse, className }) => (
    <div className={`lg:mx-auto lg:max-w-7xl lg:px-4 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 ${className}`}>
        <div className={`px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 ${reverse ? 'order-last' : ''}`}>
            <div>
                <div>
                    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gray-600">
                        {icon}
                    </span>
                </div>
                <div className="mt-6">
                    <Heading>{title}</Heading>
                    <p className="mt-4 text-lg text-gray-500">
                        {description}
                    </p>
                </div>
            </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0 flex items-center">
            <div className="px-4 lg:px-0">
                <img
                    alt="feature"
                    className="rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 w-auto"
                    src={image}
                    style={{ boxShadow: '0 0px 12px rgb(0 0 0 / 20%)' }}
                />
            </div>
        </div>
    </div>
);

Feature.defaultProps = {
    title: 'Feature',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero labore natus, quod',
    image: 'https://tailwindui.com/img/component-images/dark-project-app-screenshot.png',
    icon: <BeakerIcon className="h-6 w-6 text-white" />,
    reverse: false,
};

export default Feature;
