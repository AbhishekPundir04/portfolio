"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Menu,Download } from "lucide-react";
import { useState } from "react";
import Sidebar from "@/components/features/motion/homepage/drawer/drawer";
const Header = () => {
  const [open,setOpen] = useState<boolean>(false)

  const handleDownload = () => {
    const resumeUrl = "/AbhishekPundir.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "AbhishekPundir.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-blue text-black fixed w-full top-0 shadow-md z-50 p-4"
      >
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
          <div className="text-xl font-medium hover:cursor-pointer text-white hidden md:block">
            <Link href="/" className="f">Abhishek Pundir</Link>
          </div>

          <nav className="hidden md:flex justify-center space-x-6 font-medium">
            <Link href="/" className="header_link">
              Home
            </Link>
            <Link href="/about-us" className="header_link">
              About
            </Link>
           
            <Link href="/contact" className="header_link">
              Contact
            </Link>

          </nav>

          <div className="flex justify-between items-center w-full md:justify-end">
            <div className="md:hidden">
              <Menu size={28} className="cursor-pointer" />
            </div>
            <button
              onClick={handleDownload}
              className="flex items-center bg-white text-blue-600 px-4 py-2 rounded-md shadow-md hover:bg-gray-200 transition"
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </button>


          </div>
        </div>
      </motion.header>
      <Sidebar  />
    </>
  );
};

export default Header;
