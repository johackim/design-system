import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Header = ({ title, description, logo, fixed, size, children, className }) => {
    const [isOpen, setOpen] = useState(false);
    const ref = useRef();

    const sizes = {
        lg: 'lg:tw-max-w-screen-lg',
        md: 'md:tw-max-w-screen-md',
        xl: 'md:tw-max-w-screen-xl',
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!ref.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside, true);

        return () => document.removeEventListener('click', handleClickOutside, true);
    }, []);

    return (
        <>
            <header ref={ref} className={`tw-flex tw-shadow-md tw-inset-x-0 tw-h-16 tw-items-center tw-z-20 tw-text-gray-700 dark:tw-bg-gray-900 dark:tw-text-gray-300 tw-bg-white ${fixed ? 'tw-fixed tw-top-0' : ''} ${className}`}>
                <div className={`tw-container tw-m-auto tw-flex tw-items-center tw-justify-between tw-flex-wrap tw-px-4 ${sizes[size]}`}>
                    <Link href="/">
                        <a href="/">
                            <div className="tw-flex tw-items-center">
                                <img src={logo} alt="logo" className="tw-rounded-full tw-w-12" width="48" height="48" />
                                <div className="tw-ml-2">
                                    <div className="tw-font-bold tw-leading-none">{title}</div>
                                    <div className="tw-text-sm tw-leading-none">{description}</div>
                                </div>
                            </div>
                        </a>
                    </Link>

                    <div className="tw-hidden md:tw-grid tw-grid-flow-col tw-gap-4 tw-items-center">{children}</div>

                    <div className="md:tw-hidden">
                        <button type="button" onClick={() => setOpen(!isOpen)} className="tw-bg-white dark:tw-bg-transparent dark:hover:tw-bg-gray-700 tw-rounded-md tw-p-2 tw-inline-flex tw-items-center tw-justify-center tw-text-gray-400 dark:tw-text-gray-300 dark:hover:tw-text-white hover:tw-text-gray-500 hover:tw-bg-gray-100 focus:tw-outline-none">
                            {isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="tw-h-6 tw-w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="tw-h-6 tw-w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </header>
            {isOpen && (
                <div className={`sm:tw-hidden tw-z-20 tw-mb-4 tw-border-b dark:tw-border-gray-800 tw-fixed tw-inset-x-0 ${fixed ? 'tw-top-16' : ''}`}>
                    <div className="tw-pt-2 tw-pb-3 tw-space-y-1 tw-bg-white dark:tw-bg-gray-900">
                        {children.filter(({ props }) => props?.href !== undefined).map(({ props }) => (
                            <Link href={props.href} key={props.children}>
                                <a href={props.href} className="dark:tw-text-gray-300 dark:hover:tw-bg-gray-700 dark:hover:tw-text-white tw-text-gray-500 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-block tw-px-3 tw-py-2 tw-text-base tw-font-medium">
                                    {props.children}
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

Header.defaultProps = {
    title: 'Title',
    fixed: false,
    size: 'lg',
    description: 'Description',
    logo: 'https://svgur.com/i/csw.svg',
    className: '',
};

export default Header;
