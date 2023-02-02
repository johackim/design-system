import React from 'react';

import '@styles/layout.module.css';

import Header from '@organisms/header';
import Footer from '@organisms/footer';

const DefaultLayout = ({ title, description, children, logo, links, backgroundImage, className }) => (
    <>
        <Header
            className={`${backgroundImage && '!bg-gray-900/50'}`}
            title={title}
            description={description}
            logo={logo}
            fixed
        >
            {links}
        </Header>
        <main className={className}>{children}</main>
        <Footer />
    </>
);

DefaultLayout.defaultProps = {
    backgroundImage: false,
    title: 'Title',
    logo: 'https://svgur.com/i/csw.svg',
    description: 'Description',
    links: [],
};

export default DefaultLayout;
