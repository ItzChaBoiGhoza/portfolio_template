import React from "react";
import { useState } from "react";

interface Tab {
    title: string;
    tech_stack: string;
    description: string; 
}

const project_tabs: Tab[] = [
    {
        title: 'Project 1',
        tech_stack: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.'
    },
    {
        title: 'Project 2',
        tech_stack: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.'
    },
    {
        title: 'Project 3',
        tech_stack: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.'
    },
    {
        title: 'Project 4',
        tech_stack: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.'
    },
    {
        title: 'Project 5',
        tech_stack: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.'
    },
    {
        title: 'Project 6',
        tech_stack: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.'
    },
];

export default function Projects() {
    const [activeTab, setActiveTab] = useState<Tab>(project_tabs[0]);
    return (
        <section id="projects" className="min-h-screen my-16">
            <h2 className="text-[55px] font-bold text-gray-800 text-center pb-3">
                Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-1 max-w-7xl mx-auto shadow-xl/30 rounded-xl p-10 border border-[var(--base-color)]">
                <div className="flex flex-wrap justify-center gap-3 mb-3 max-w-4xl mx-auto">
                        {project_tabs.map((tab) => (
                            <button
                            key={tab.title}
                            onClick={() => setActiveTab(tab)}
                            className={`transition text-sm font-medium
                                ${
                                activeTab.title === tab.title
                                    ? "text-white font-bold text-[25px] mx-2"
                                    : "text-gray-800 hover:text-gray-300 text-[20px] mx-2"
                                }`}
                            >
                            {tab.title}
                            </button>
                        ))}
                    </div>
                    <div className="p-3 rounded-xl bg-gray-800/55 transition">
                        <p className="text-white">{activeTab.description}</p>
                </div>
            </div>
        </section>
    );
};