import React, { useState, useEffect } from 'react';

const Switch = ({ defaultValue, icons, onClick }) => {
    const [isOpen, setOpen] = useState(false);

    const toggle = () => {
        onClick();
        setOpen(!isOpen);
    };

    useEffect(() => {
        setOpen(defaultValue);
    }, []);

    return (
        <button type="button" onClick={toggle} className={`${isOpen ? 'tw-bg-gray-600' : 'tw-bg-gray-200'} tw-relative tw-inline-flex tw-flex-shrink-0 tw-h-6 tw-w-11 tw-border-2 tw-border-transparent tw-rounded-full tw-cursor-pointer tw-transition-colors tw-ease-in-out tw-duration-200 focus:tw-outline-none`}>
            {icons.length === 2 ? (
                <span className={`${isOpen ? 'tw-translate-x-5' : 'tw-translate-x-0'} tw-pointer-events-none tw-relative tw-inline-block tw-h-5 tw-w-5 tw-rounded-full tw-bg-white tw-shadow tw-transform tw-ring-0 tw-transition tw-ease-in-out tw-duration-200`}>
                    <span className={`${isOpen ? 'tw-opacity-0 tw-ease-out tw-duration-100' : 'tw-opacity-100 tw-ease-in tw-duration-200'} tw-absolute tw-inset-0 tw-h-full tw-w-full tw-flex tw-items-center tw-justify-center tw-transition-opacity`}>
                        {icons[0]}
                    </span>
                    <span className={`${isOpen ? 'tw-opacity-100 tw-ease-in tw-duration-200' : 'tw-opacity-0 tw-ease-out tw-duration-100'} tw-absolute tw-inset-0 tw-h-full tw-w-full tw-flex tw-items-center tw-justify-center tw-transition-opacity`}>
                        {icons[1]}
                    </span>
                </span>
            ) : (
                <span className={`${isOpen ? 'tw-translate-x-5' : 'tw-translate-x-0'} tw-pointer-events-none tw-inline-block tw-h-5 tw-w-5 tw-rounded-full tw-bg-white tw-shadow tw-transform tw-ring-0 tw-transition tw-ease-in-out tw-duration-200`} />
            )}
        </button>
    );
};

Switch.defaultProps = {
    icons: [],
    defaultValue: false,
    onClick: () => {},
};

export default Switch;
