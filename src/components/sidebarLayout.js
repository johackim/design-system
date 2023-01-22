import React, { useState } from 'react';
import { MenuIcon, HomeIcon, XIcon, CogIcon, LogoutIcon } from '@heroicons/react/outline';
import Link from '@components/link';

const sidebarLayout = ({ children, className, links, logo }) => {
    const [isSidebarOpened, updateSidebar] = useState(false);

    const toggleSidebar = () => {
        updateSidebar(!isSidebarOpened);
    };

    return (
        <>
            <div className={`relative z-40 md:hidden ${isSidebarOpened ? 'block' : 'hidden'}`} role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />

                <div className="fixed inset-0 z-40 flex">
                    <div className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800">
                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                            <button type="button" onClick={toggleSidebar} className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none">
                                <span className="sr-only">Close sidebar</span>
                                <XIcon className="h-6 w-6 text-white" />
                            </button>
                        </div>

                        <div className="h-0 flex-1 overflow-y-auto pb-4">
                            <div className="flex h-16 flex-shrink-0 items-center bg-gray-900 px-4">
                                <img className="h-8 w-auto" src={logo} alt="Logo" />
                            </div>
                            <nav className="mt-5 space-y-1 px-2">
                                {links.map(({ href, icon, name, active }) => (
                                    <Link href={href} key={name} className={`hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md ${active ? 'bg-gray-900 !text-white' : 'text-gray-300 hover:bg-gray-700'}`}>
                                        {icon}
                                        {name}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                        <nav className="p-2">
                            <Link href="/logout" className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
                                <LogoutIcon className="mr-4 h-6 w-6" />
                                Sign out
                            </Link>
                        </nav>
                    </div>

                    <div className="w-14 flex-shrink-0" />
                </div>
            </div>

            <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
                <div className="flex min-h-0 flex-1 flex-col bg-gray-800">
                    <div className="flex flex-1 flex-col overflow-y-auto pb-4">
                        <div className="flex h-16 flex-shrink-0 items-center bg-gray-900 px-4">
                            <img className="h-8 w-auto" src={logo} alt="Logo" />
                        </div>
                        <nav className="mt-5 flex-1 space-y-1 px-2">
                            {links.map(({ href, icon, name, active }) => (
                                <Link href={href} key={name} className={`hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md ${active ? 'bg-gray-900 !text-white' : 'text-gray-300 hover:bg-gray-700'}`}>
                                    {icon}
                                    {name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                    <nav className="p-2">
                        <Link href="/logout" data-test="logout" className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
                            <LogoutIcon className="mr-4 h-6 w-6" />
                            Sign out
                        </Link>
                    </nav>
                </div>
            </div>
            <div className="flex flex-1 flex-col md:pl-64">
                <div className="sticky top-0 z-10 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
                    <button type="button" onClick={toggleSidebar} className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none">
                        <span className="sr-only">Open sidebar</span>
                        <MenuIcon className="h-6 w-6" />
                    </button>
                </div>
                <main className={className}>{children}</main>
            </div>
        </>
    );
};

sidebarLayout.defaultProps = {
    className: 'flex-1',
    logo: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500',
    links: [
        { name: 'Home', href: '/', icon: <HomeIcon className="mr-4 h-6 w-6" fill="none" /> },
        { name: 'Settings', href: '/settings', icon: <CogIcon className="mr-4 w-6 h-6" fill="none" /> },
    ],
    children: (
        <div className="py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <div className="py-4">
                    <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
                </div>
            </div>
        </div>
    ),
};

export default sidebarLayout;
