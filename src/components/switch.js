import React, { useState } from 'react';

const Switch = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <button type="button" onClick={() => setOpen(!isOpen)} className={`${isOpen ? 'bg-gray-600' : 'bg-gray-200'} relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none`} role="switch" aria-checked="false">
            <span className="sr-only">Use setting</span>
            <span className={`${isOpen ? 'translate-x-5' : 'translate-x-0'} pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`} />
        </button>
    );
};

Switch.defaultProps = {
    onClick: () => {},
};

export default Switch;
