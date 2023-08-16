import React, { useState } from 'react';

const Tooltip = ({ children, text }) => {
    const [showTip, setShowTip] = useState(false);

    const handleMouseOver = () => setShowTip(true);

    const handleMouseOut = () => setShowTip(false);

    return (
        <div className="relative inline-flex">
            <div
                onMouseOver={handleMouseOver}
                onFocus={handleMouseOver}
                onMouseOut={handleMouseOut}
                onBlur={handleMouseOut}
            >
                {children}
            </div>
            {showTip && (
                <div className="absolute w-max max-w-[300px] text-center z-50 rounded-md p-2 text-sm bg-black text-white bottom-[110%] left-1/2 transform -translate-x-1/2">
                    {text}
                </div>
            )}
        </div>
    );
};

Tooltip.defaultProps = {
    text: 'Tooltip',
};

export default Tooltip;
