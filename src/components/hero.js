import React from 'react';

import Button from '@components/button';

const Hero = ({ children, preHead, headline, subHeadline, centered, backgroundImage }) => (
    <section className={`${centered && 'h-screen'} flex justify-center text-center items-center mx-auto ${backgroundImage ? "before:content-[''] before:bg-[url('/background.jpg')] before:brightness-[.15] before:-z-10 before:absolute before:w-full before:h-full before:bg-cover before:bg-center" : ''}`}>
        <div className="px-2 sm:px-0">
            {preHead && <h3 className={`text-sm lg:text-lg my-4 ${backgroundImage ? 'text-gray-300' : 'text-gray-500 dark:text-gray-400'}`}>{preHead}</h3>}

            { headline && <h1 className={`mx-auto text-3xl max-w-2xl tracking-tight leading-10 font-medium sm:text-5xl sm:leading-none md:text-6xl ${backgroundImage ? 'text-gray-300' : 'text-gray-700 dark:text-gray-300'}`}>{headline}</h1> }

            { subHeadline && <h2 className={`max-w-md mx-auto text-base sm:text-lg md:text-xl md:max-w-3xl mt-2 ${backgroundImage ? 'text-gray-300' : 'text-gray-500 dark:text-gray-400'}`}>{subHeadline}</h2> }

            <div className="mt-4 grid gap-2 sm:grid-flow-col sm:auto-cols-max sm:justify-center">
                {children}
            </div>
        </div>
    </section>
);

Hero.defaultProps = {
    centered: true,
    preHead: '',
    headline: 'Headline',
    subHeadline: 'Sub-headline',
    backgroundImage: false,
    children: [
        <Button href="/">Call To Action</Button>,
        <Button href="/" secondary>Secondary Action</Button>,
    ],
};

export default Hero;
