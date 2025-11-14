import React from "react";
import { useState, useEffect } from "react";

export default function Navbar() {
    const page_sections = [
        { 
        id: 'hero', 
        label: 'HOME', 
        icon: <svg className="w-8 h-8 text-gray-800 dark:text-white my-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clip-rule="evenodd"/>
            </svg>

        },
        { 
        id: 'about', 
        label: 'ABOUT', 
        icon: <svg className="w-8 h-8 text-gray-800 dark:text-white my-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
                        </svg>
        },
        {
            id: 'projects', 
            label: 'PROJECTS', 
            icon: <svg className="w-8 h-8 text-gray-800 dark:text-white my-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M20 10H4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8ZM9 13v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
                            <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Z"/>
                        </svg>
        },
        {
            id: 'contact', 
            label: 'CONTACT', 
            icon: <svg className="w-8 h-8 text-gray-800 dark:text-white my-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
                        </svg>
        },
    ];

    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        const handleScroll = () => {
            const current = page_sections.find((s) => {
                const el = document.getElementById(s.id);
                if (!el) return false;
                const rect = el.getBoundingClientRect();
                return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
            });
            if (current) setActiveSection(current.id);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
    <nav className="fixed top-1/2 -translate-y-1/2 left-0 h-95 rounded-xl w-14 bg-gray-800 z-50 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-6">
            {page_sections.map((s) => (
            <a
                key={s.id}
                href={`#${s.id}`}
                className={`relative group transition-all duration-300 ${
                activeSection === s.id
                    ? "text-blue-400 scale-110"
                    : "text-gray-300 hover:text-white"
                }`}
            >
                <div className="text-2xl">{s.icon}</div>
                {/* Tooltip */}
                <span className="absolute left-14 top-1/2 -translate-y-1/2 text-white text-[20px] opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                {s.label}
                </span>
            </a>
            ))}
        </div>
    </nav>
  );
};