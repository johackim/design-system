import React from 'react';

import Link from '@components/link';

const Footer = ({ links, date }) => (
    <footer className="container m-auto px-4 py-8 flex items-center justify-between flex-wrap lg:max-w-screen-lg text-gray-700 dark:text-gray-300">
        <div>
            <span>&copy;</span>
            <span className="ml-2">{date || new Date().getFullYear()}</span>
        </div>
        <nav className="grid grid-flow-col gap-2 items-center">
            {links.map(({ name, path }) => (
                <Link href={path} key={name} rel="noopener">
                    {name}
                </Link>
            ))}
        </nav>
    </footer>
);

Footer.defaultProps = {
    links: [],
};

export default Footer;
