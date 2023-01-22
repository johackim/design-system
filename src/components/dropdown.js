import React, { useState, useEffect, useRef } from 'react';
import { ChevronDownIcon, DotsVerticalIcon } from '@heroicons/react/solid';
import Button from '@components/button';

const Dropdown = ({ children, label, className, simple, dots, isOpenDefault, ...rest }) => {
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
        <div ref={ref} className="relative inline-block text-left text-gray-700 dark:text-gray-300">
            {dots ? (
                <button type="button" onClick={() => setOpen(!isOpen)} className={`${className} -m-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-600 focus:outline-none`} {...rest}>
                    <DotsVerticalIcon className="h-5 w-5" />
                </button>
            ) : (
                <Button onClick={() => setOpen(!isOpen)} className={simple ? `${className} border-none !px-0 !py-0` : className} {...rest} secondary>
                    {label}
                    <ChevronDownIcon className="-mr-1 ml-2 h-4 w-4" />
                </Button>
            )}

            {children && (
                <div className={`${!isOpen && 'hidden'} origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black dark:ring-gray-700 ring-opacity-5 divide-y divide-gray-100 dark:divide-gray-800 focus:outline-none dark:bg-gray-900`}>
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
