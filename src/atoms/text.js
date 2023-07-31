import React from 'react';

const Text = ({ children, className }) => (
    <p className={`text-gray-700 ${className}`}>{children}</p>
);

Text.defaultProps = {
    className: '',
};

export default Text;
