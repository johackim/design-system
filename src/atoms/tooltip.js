import React from 'react';

const Tooltip = ({ children, text }) => (
    <div className="relative inline-flex align-bottom group">
        <div>
            {children}
        </div>
        <div className="hidden group-hover:block absolute w-max max-w-[300px] text-center z-50 rounded-md p-2 text-sm bg-black text-white bottom-[110%] left-1/2 transform -translate-x-1/2">
            {text}
        </div>
    </div>
);

Tooltip.defaultProps = {
    text: 'Tooltip',
};

export default Tooltip;
