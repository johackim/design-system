import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const [K, ESC, ENTER, UP, DOWN] = [75, 27, 13, 38, 40];

const commandPalette = ({ url, onClose, ...props }) => {
    const ref = useRef();
    const router = useRouter();
    const [state] = useState({ search: '' });
    const [activeEntry, setActiveEntry] = useState(0);
    const [isOpen, setOpen] = useState(false);
    const [data, setData] = useState(props.data);

    const closeCommandPalette = () => {
        onClose();
        setOpen(false);
    };

    const handleChange = async (e) => {
        const { value: search } = e.target;

        if (!url) return;

        await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ search }),
        })
            .then((res) => res.json())
            .then(({ results }) => {
                setActiveEntry(0);
                setData(results);
            });
    };

    useEffect(() => {
        setOpen(props.isOpen);
    }, [props.isOpen]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!ref.current.contains(e.target)) {
                closeCommandPalette();
            }
        };

        document.addEventListener('click', handleClickOutside, true);
        return () => document.removeEventListener('click', handleClickOutside, true);
    }, []);

    useEffect(() => {
        document.querySelector('input[name=search]').addEventListener('keydown', (e) => {
            if (e.which === UP || e.which === DOWN) {
                e.preventDefault();
            }
        });
    }, []);

    useEffect(() => {
        const handleKeys = (event) => {
            if (event.ctrlKey && event.keyCode === K) {
                event.preventDefault();
                setOpen(() => !isOpen);
            }

            if (event.keyCode === ESC) {
                event.preventDefault();
                setOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeys);

        return () => window.removeEventListener('keydown', handleKeys);
    }, [isOpen]);

    useEffect(() => {
        const handleUp = (event) => {
            if (event.keyCode === UP && activeEntry > 0) {
                setActiveEntry(activeEntry - 1);
            }
        };

        const handleDown = (event) => {
            if (event.keyCode === DOWN && activeEntry < data.length - 1) {
                setActiveEntry(activeEntry + 1);
            }
        };

        window.addEventListener('keydown', handleUp);
        window.addEventListener('keydown', handleDown);

        return () => {
            window.removeEventListener('keydown', handleUp);
            window.removeEventListener('keydown', handleDown);
        };
    }, [activeEntry, data]);

    useEffect(() => {
        const handleEnter = (event) => {
            if (event.keyCode === ENTER) {
                event.preventDefault();
                const href = data[activeEntry]?.href;
                router.push(href);
                closeCommandPalette();
            }
        };

        window.addEventListener('keydown', handleEnter);

        return () => window.removeEventListener('keydown', handleEnter);
    }, [activeEntry, data]);

    const { search } = state;

    return (
        <div className={`fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20 ${isOpen ? 'block' : 'hidden'}`} role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" aria-hidden="true" />

            <div ref={ref} className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                <div className="relative">
                    <svg className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                    <input
                        type="text"
                        className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:outline-none sm:text-sm focus:ring-0"
                        placeholder="Rechercher..."
                        onChange={handleChange}
                        ref={(input) => input && input.focus()}
                        name="search"
                    />
                </div>

                {data.length > 0 && (
                    <ul className="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800" id="options" role="listbox">
                        {data.map(({ title, href }, index) => (
                            <li key={title} className={`cursor-default select-none px-4 py-2 ${activeEntry === index ? 'bg-gray-600 text-white' : ''}`}>
                                <Link href={href}>
                                    <a href={href}>{title}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}

                {data.length === 0 && search !== '' && (
                    <p className="p-4 text-sm text-gray-500">No results.</p>
                )}
            </div>
        </div>
    );
};

commandPalette.defaultProps = {
    isOpen: false,
    handleChange: () => {},
    data: [],
};

export default commandPalette;
