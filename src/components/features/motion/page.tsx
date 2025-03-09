"use client";

import { Menu } from 'lucide-react';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function BrandLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <motion.div
          className="fixed inset-0 flex justify-center items-center bg-background z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue"
          >
            Abhishek Pundir
            </motion.h1>
        </motion.div>
      ) : (
        children
      )}
    </>
  );
}
