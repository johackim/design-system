import React from 'react';

import Button from '@components/button';

const Hero = ({ children, preHead, headline, subHeadline, centered, backgroundImage }) => (
    <section className={`${centered && 'tw-h-screen'} tw-flex tw-justify-center tw-text-center tw-items-center tw-mx-auto ${backgroundImage ? "before:tw-content-[''] before:tw-bg-[url('/background.jpg')] before:tw-brightness-[.15] before:-tw-z-10 before:tw-absolute before:tw-w-full before:tw-h-full before:tw-bg-cover before:tw-bg-center" : ''}`}>
        <div className="tw-px-2 sm:tw-px-0">
            {preHead && <h3 className={`tw-text-sm lg:tw-text-lg tw-my-4 ${backgroundImage ? 'tw-text-gray-300' : 'tw-text-gray-500 dark:tw-text-gray-400'}`}>{preHead}</h3>}

            { headline && <h1 className={`tw-mx-auto tw-text-3xl tw-max-w-2xl tw-tracking-tight tw-leading-10 tw-font-medium sm:tw-text-5xl sm:tw-leading-none md:tw-text-6xl ${backgroundImage ? 'tw-text-gray-300' : 'tw-text-gray-700 dark:tw-text-gray-300'}`}>{headline}</h1> }

            { subHeadline && <h2 className={`tw-max-w-md tw-mx-auto tw-text-base sm:tw-text-lg md:tw-text-xl md:tw-max-w-3xl tw-mt-2 ${backgroundImage ? 'tw-text-gray-300' : 'tw-text-gray-500 dark:tw-text-gray-400'}`}>{subHeadline}</h2> }

            <div className="tw-mt-4 tw-grid tw-gap-2 sm:tw-grid-flow-col sm:tw-auto-cols-max sm:tw-justify-center">
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
