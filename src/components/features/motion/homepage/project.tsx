"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface Project {
    title: string;
    description: string;
    techStack: string[];
    link?: string;
}

const professionalProjects: Project[] = [
    { title: "Simply X", description: "A drag-and-drop web builder using GrapesJS.", techStack: ["React", "GrapesJS", "Tailwind"], link: "/" },
    { title: "Cognition AI POC", description: "AI-driven emotion recognition using Hume.", techStack: ["Next.js", "Hume AI", "WebSockets"], link: "/" },
    { title: "LoanJagat", description: "A financial platform for loans and credit management.", techStack: ["React","Tailwind"], link: "https://loanjagat.com" },
    { title: "Keto Diet", description: "A health and fitness platform focused on ketogenic diet plans.", techStack: ["React", "Antd"], link: "" },
    { title: "Hubshift", description: "A SaaS platform for business automation and CRM.", techStack: ["React", "Ant Design",], link: "https://www.hubshift.au/" }
];

const personalProjects: Project[] = [
    { title: "Nextflix Gpt", description: "Search and browse movies using an external API.", techStack: ["React", "TMDB API", "Tailwind"], link: "" }
];

export const Project: React.FC = () => {
    const [activeTab, setActiveTab] = useState<"professional" | "personal">("professional");

    return (
        <div className="mx-auto p-8 text-white bg-gray-900 mt-20 rounded-md">
            <h2 className="text-3xl font-semibold mb-6">Projects</h2>
            {/* Tabs */}
            <div className="flex space-x-6 justify-center mb-6">
                <button
                    className={`px-6 py-3 text-lg font-medium transition duration-300 rounded-md border-2 ${activeTab === "professional" ? "bg-white text-black border-white" : "bg-gray-700 border-transparent hover:bg-gray-600"}`}
                    onClick={() => setActiveTab("professional")}
                >
                    Professional Projects
                </button>
                <button
                    className={`px-6 py-3 text-lg font-medium transition duration-300 rounded-md border-2 ${activeTab === "personal" ? "bg-white text-black border-white" : "bg-gray-700 border-transparent hover:bg-gray-600"}`}
                    onClick={() => setActiveTab("personal")}
                >
                    Personal Projects
                </button>
            </div>

            {/* Project Cards */}
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
                {(activeTab === "professional" ? professionalProjects : personalProjects).map((project, index) => (
                    <motion.div
                        key={index}
                        className="p-6 rounded-lg bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                    >
                        <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                        <p className="text-gray-400 mb-4">{project.description}</p>
                        <p className="mb-4"><strong>Tech Stack:</strong> {project.techStack.join(", ")}</p>
                        {project.link && (
                            <a href={project.link} target="_blank" className="text-blue-400 hover:underline mt-2 inline-block">
                                Live Demo
                            </a>
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};
