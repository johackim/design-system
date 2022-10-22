import React, { useState, useEffect } from 'react';

const Switch = ({ defaultValue, icons, onClick, className }) => {
    const [isOpen, setOpen] = useState(false);

    const toggle = () => {
        onClick();
        setOpen(!isOpen);
    };

    useEffect(() => {
        setOpen(defaultValue);
    }, [defaultValue]);

    return (
        <button type="button" aria-label="switch" onClick={toggle} className={`${className} ${isOpen ? 'bg-gray-600' : 'bg-gray-200'} relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none`}>
            {icons.length === 2 ? (
                <span className={`${isOpen ? 'translate-x-5' : 'translate-x-0'} pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}>
                    <span className={`${isOpen ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200'} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}>
                        {icons[0]}
                    </span>
                    <span className={`${isOpen ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100'} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}>
                        {icons[1]}
                    </span>
                </span>
            ) : (
                <span className={`${isOpen ? 'translate-x-5' : 'translate-x-0'} pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`} />
            )}
        </button>
    );
};

Switch.defaultProps = {
    icons: [],
    defaultValue: false,
    onClick: () => {},
    className: '',
};

export default Switch;
