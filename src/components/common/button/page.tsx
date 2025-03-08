
import React from "react";

interface AboutComponentProps {
    title: string;
    description: string;
    sentence1: string;
    sentence2: string;
}

export const AboutComponent: React.FC<AboutComponentProps> = ({ title, description }) => {
    return <>
    Hello</>
}