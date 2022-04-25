import React from 'react';
import Link from 'next/link';

const Button = ({ href, secondary, children, onClick, className = '', ...props }) => {
    const primaryClassName = `tw-inline-flex tw-rounded-md tw-items-center tw-justify-center tw-px-5 tw-py-2 tw-border tw-border-transparent tw-text-white tw-bg-gray-600 hover:tw-bg-gray-700 dark:tw-bg-gray-700 dark:hover:tw-bg-gray-600 dark:hover:tw-text-white dark:tw-text-gray-300 focus:tw-outline-none ${className}`;

    const secondaryClassName = `tw-inline-flex tw-rounded-md tw-items-center tw-justify-center tw-px-5 tw-py-2 tw-border hover:tw-border-gray-400 tw-text-gray-700 hover:tw-text-gray-900 dark:tw-text-gray-300 dark:hover:tw-text-white dark:hover:tw-border-white focus:tw-outline-none ${className}`;

    return (
        href ? (
            <Link href={href}>
                <a href={href} className={secondary ? secondaryClassName : primaryClassName} {...props}>{children}</a>
            </Link>
        ) : (
            <button type="button" onClick={onClick} className={secondary ? secondaryClassName : primaryClassName} {...props}>{children}</button>
        )
    );
};

Button.defaultProps = {
    onClick: () => {},
    secondary: false,
    children: 'Button',
    href: '',
};

export default Button;
