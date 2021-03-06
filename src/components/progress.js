import React, { useState, useEffect } from 'react';

export default () => {
    const [progress, setProgress] = useState(0);

    const scrollProgress = () => {
        const scrollPx = document.documentElement.scrollTop;
        const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setProgress((scrollPx / winHeightPx) * 100);
    };

    useEffect(() => {
        document.addEventListener('scroll', scrollProgress);
    }, []);

    return <div className="bg-gray-600 h-1 z-30 fixed inset-0" style={{ width: `${progress}%` }} />;
};
