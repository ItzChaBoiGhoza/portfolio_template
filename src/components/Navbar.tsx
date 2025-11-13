import React from "react";
import { useState } from "react";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 h-full w-10 bg-gray-800 flex flex-col justify-between items-center z-50">
            <div className="flex flex-col my-auto mx-auto">
                <div className="relative group">
                    <a href="#" className="">
                        <svg className="w-8 h-8 text-gray-800 dark:text-white my-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
                        </svg>
                    </a>
                    <span className="absolute left-15 top-1/2 -translate-y-1/2 text-white text-[25px] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        ABOUT
                    </span>
                </div>
                <div className="relative group">
                    <a href="#" className="">
                        <svg className="w-8 h-8 text-gray-800 dark:text-white my-6 hover:" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M20 10H4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8ZM9 13v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
                            <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Z"/>
                        </svg>
                        <span className="absolute left-15 top-1/2 -translate-y-1/2 text-white text-[25px] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                            PROJECTS
                        </span>
                    </a>
                </div>
                <div className="relative group">
                    <a href="#" className="">
                        <svg className="w-8 h-8 text-gray-800 dark:text-white my-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
                        </svg>
                        <span className="absolute left-15 top-1/2 -translate-y-1/2 text-white text-[25px] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                            CONTACT
                        </span>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

