"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code, Paintbrush, Layers, Zap, Cpu } from "lucide-react"; // Icons

interface SkillSetProps {
    
}

export const SkillSet: React.FC<SkillSetProps> = () => {
    const skills = [
        { icon: <Code size={32} />, name: "React.js & Next.js" },
        { icon: <Paintbrush size={32} />, name: "Tailwind CSS, Material UI, Shadcn" },
        { icon: <Layers size={32} />, name: "Component-Based Architecture" },
        { icon: <Zap size={32} />, name: "Performance Optimization" },
        { icon: <Cpu size={32} />, name: "State Management (Redux, Context API)" },
    ];

    return (
        <motion.div
            className="p-8 bg-gray-900 rounded-lg text-white max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className="text-4xl font-medium text-center mb-6">Skills</h1>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="flex items-center space-x-3 bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                    >
                        {skill.icon}
                        <span className="text-lg font-medium">{skill.name}</span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};
