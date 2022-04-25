import React from 'react';

import '@styles/layout.module.css';

import Header from '@components/header';
import Footer from '@components/footer';

const Layout = ({ title, description, children, logo, links, backgroundImage, className }) => (
    <>
        <Header
            className={`${backgroundImage && '!tw-bg-gray-900/50'}`}
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

Layout.defaultProps = {
    backgroundImage: false,
    title: 'Title',
    logo: 'https://svgur.com/i/csw.svg',
    description: 'Description',
    links: [],
};

export default Layout;
