import React, { useState, useEffect, useRef } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Button from '@components/button';

const Dropdown = ({ children, label, className, simple, isOpenDefault }) => {
    const ref = useRef();
    const [isOpen, setOpen] = useState(isOpenDefault);

    const handleClickOutside = (e) => {
        if (!ref.current.contains(e.target)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => document.removeEventListener('click', handleClickOutside, true);
    }, []);

    return (
        <div ref={ref} className="tw-relative tw-inline-block tw-text-left tw-text-gray-700 dark:tw-text-gray-300">
            <Button onClick={() => setOpen(!isOpen)} className={simple ? `${className} tw-border-none !tw-px-0 !tw-py-0` : className} secondary>
                {label}
                <ChevronDownIcon className="-tw-mr-1 tw-ml-2 tw-h-4 tw-w-4" />
            </Button>

            {children && (
                <div className={`${!isOpen && 'tw-hidden'} tw-origin-top-right tw-absolute tw-right-0 tw-mt-2 tw-w-56 tw-rounded-md tw-shadow-lg tw-bg-white tw-ring-1 tw-ring-black dark:tw-ring-gray-700 tw-ring-opacity-5 tw-divide-y tw-divide-gray-100 dark:tw-divide-gray-800 focus:tw-outline-none dark:tw-bg-gray-900`}>
                    {children}
                </div>
            )}
        </div>
    );
};

Dropdown.defaultProps = {
    className: '',
    children: '',
    isOpenDefault: false,
    label: 'Options',
};

export default Dropdown;
