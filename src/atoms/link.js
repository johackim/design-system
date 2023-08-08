import React from 'react';
import NextLink from 'next/link';
import { cva } from 'class-variance-authority';

const style = cva(
    'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white',
    {
        variants: {
            active: {
                true: 'text-gray-900 dark:text-white',
            },
        },
        defaultVariants: {
            active: false,
        },
    },
);

const Link = ({ href, children, active, as, className, secondary = false, ...props }) => (
    <NextLink href={href} className={style({ className: `${as ? as.style({ secondary }) : ''} ${className}`.trim(), active })} {...props}>
        {children}
    </NextLink>
);

Link.style = style;

Link.defaultProps = {
    href: '/',
    children: 'Link',
    className: '',
    active: false,
};

export default Link;
