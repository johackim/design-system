import React from 'react';

const Footer = ({ startYear, date, copyleft, children }) => (
    <footer className="tw-container tw-m-auto tw-px-4 tw-py-8 tw-flex tw-items-center tw-justify-between tw-flex-wrap lg:tw-max-w-screen-lg tw-text-gray-700 dark:tw-text-gray-300">
        <div>
            <span className={`${copyleft ? 'tw-inline-block tw-transform tw-rotate-180' : ''}`}>&copy;</span>
            <span className="tw-ml-2">
                {startYear && `${startYear}-`}
                {date || new Date().getFullYear()}
            </span>
        </div>
        <nav className="tw-grid tw-grid-flow-col tw-gap-2 tw-items-center">
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
