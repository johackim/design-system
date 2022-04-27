import React, { useEffect, useState } from 'react';

const Modal = ({ children, onClick, isOpenDefault }) => {
    const [isOpen, setOpen] = useState(false);

    const closeModal = () => {
        onClick();
        setOpen(false);
    };

    useEffect(() => {
        setOpen(isOpenDefault);
    }, [isOpenDefault]);

    useEffect(() => {
        document.addEventListener('mouseout', (e) => {
            if (!e.toElement && !e.relatedTarget) {
                if (typeof window !== 'undefined' && !localStorage.getItem('exitpopup')) {
                    localStorage.setItem('exitpopup', true);
                    setOpen(true);
                }
            }
        });

        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                closeModal();
            }
        };

        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    return (
        <div className={`fixed inset-x-0 px-4 pb-6 inset-0 p-0 flex items-center justify-center z-30 ${isOpen ? 'flex' : 'hidden'}`}>
            <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-black opacity-90" />
                <div className="absolute top-0 right-0 p-8">
                    <svg className="h-12 w-12 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" onClick={closeModal}>
                        <path
                            d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"
                            fill="#FFF"
                        />
                    </svg>
                </div>
            </div>

            <div className="transform text-center text-white lg:max-w-screen-lg">
                {children}
            </div>
        </div>
    );
};

Modal.defaultProps = {
    children: '',
    onClick: () => {},
    isOpenDefault: false,
};

export default Modal;
