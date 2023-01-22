import React from 'react';
import Link from 'next/link';

const Button = ({ href, secondary, children, onClick, className, ...rest }) => {
    const primaryClassName = `inline-flex rounded-md items-center justify-center px-5 py-2 border border-transparent text-white bg-gray-600 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white dark:text-gray-300 focus:outline-none ${className}`;

    const secondaryClassName = `inline-flex rounded-md items-center justify-center px-5 py-2 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white dark:hover:border-white focus:outline-none ${className}`;

    return (
        href ? (
            <Link href={href}>
                <button type="button" className={secondary ? secondaryClassName : primaryClassName} {...rest}>{children}</button>
            </Link>
        ) : (
            <button type="button" onClick={onClick} className={secondary ? secondaryClassName : primaryClassName} {...rest}>{children}</button>
        )
    );
};

Button.defaultProps = {
    onClick: () => {},
    secondary: false,
    children: 'Button',
    href: '',
    className: '',
};

export default Button;
