"use client"
import Image from "next/image";
import React from "react";
import MyImg from "../../../../../public/images/Abhi.jpeg";
import { Github, Linkedin } from "lucide-react"; // Importing Lucide Icons
import TwitterIcon from "../../../../../public/images/Twitter.png";
import FaceBookIcon from "../../../../../public/images/Facebook.png";
import InstaIcon from "../../../../../public/images/Insta.png";
import GithubIcon from "../../../../../public/images/github.png";
import { motion } from "framer-motion"; // Correct import
import Link from "next/link";

interface AboutComponentProps {
    
}

export const AboutComponent: React.FC<AboutComponentProps> = () => {
    return (
<div className="grid grid-cols-2 sm:grid-cols-6 gap-[2px]">
            
            <motion.div
                className="col-span-6 md:col-span-5 p-4 md:p-16 bg-blue rounded-lg flex justify-center flex-col w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >

                <motion.div
                    className="border-t-8 border-white my-4 w-24"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                </motion.div>
                <motion.div
                    className="text-white text-3xl font-medium"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    Hi There! I'm Abhishek Pundir,
                </motion.div>

                <motion.div
                    className="text-white text-5xl font-medium mt-2"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Front End Developer
                </motion.div>

                <motion.div
                    className="text-white mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    I specialize in building modern, responsive web applications using React, Next.js, and other technologies. With a strong foundation in HTML, CSS, and JavaScript, I focus on creating seamless, user-friendly experiences. I’m passionate about transforming design ideas into interactive, high-performance websites that work flawlessly across devices.
                </motion.div>
                <motion.div
                    className="text-white mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                </motion.div>
            </motion.div>

            <motion.div
                className="col-span-1 bg-blue p-4 rounded-lg sm:w-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                {/* <Image src={MyImg} height={400} width={400} alt="img" objectFit="cover" className="rounded-md"
                 /> */}

                <motion.div
                    className="flex justify-between mt-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                     <Link href={"https://github.com/AbhishekPundir04"}>
                        <Image src={GithubIcon} height={20} alt="github" />
                        </Link>
                    <div>
                        <Image src={TwitterIcon} height={20} width={20} alt="twitter" />
                    </div>
                    <div>
                        <Image src={FaceBookIcon} height={20} alt="facebook" />
                    </div>
                    <div>
                        <Linkedin height={20} className="text-white" />
                    </div>
                    <Link href={"/"}>
                        <Image src={InstaIcon} height={20} alt="instagram" />
                    </Link>
                   
                        </motion.div>
            </motion.div>
        </div>
    );
};
