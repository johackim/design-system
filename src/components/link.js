import React from 'react';
import NextLink from 'next/link';

const Link = ({ href, children, className, active, ...rest }) => (
    <NextLink href={href}>
        <a href={href} className={`${active ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'} hover:text-gray-900 dark:hover:text-white ${className}`} {...rest}>
            {children}
        </a>
    </NextLink>
);

Link.defaultProps = {
    href: '/',
    children: 'Link',
    className: '',
    active: false,
};

export default Link;
