import React from 'react';
import NextLink from 'next/link';

const Link = ({ href, children, title, className, active }) => (
    <NextLink href={href}>
        <a href={href} className={`${active ? 'tw-text-gray-900 dark:tw-text-white' : 'tw-text-gray-700 dark:tw-text-gray-300'} hover:tw-text-gray-900 dark:hover:tw-text-white ${className}`} title={title}>
            {children}
        </a>
    </NextLink>
);

Link.defaultProps = {
    href: '/',
    children: 'Link',
    title: '',
    className: '',
    active: false,
};

export default Link;
