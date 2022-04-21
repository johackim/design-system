import React from 'react';

const Footer = ({ startYear, date, copyleft, children }) => (
    <footer className="container m-auto px-4 py-8 flex items-center justify-between flex-wrap lg:max-w-screen-lg text-gray-700 dark:text-gray-300">
        <div>
            <span className={`${copyleft ? 'inline-block transform rotate-180' : ''}`}>&copy;</span>
            <span className="ml-2">
                {startYear && `${startYear}-`}
                {date || new Date().getFullYear()}
            </span>
        </div>
        <nav className="grid grid-flow-col gap-2 items-center">
            {children}
        </nav>
    </footer>
);

Footer.defaultProps = {
    links: [],
    startYear: '',
    children: '',
    copyleft: false,
};

export default Footer;
