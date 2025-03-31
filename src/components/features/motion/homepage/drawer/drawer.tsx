"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        className="fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-md md:hidden" // Show button on small screens only
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:hidden top-0 left-0 h-screen w-64 bg-gray-900 text-white p-5 transition-transform transform md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:block`} // Sidebar is hidden on larger screens (md and up), but shows when toggled on small screens
      >
        <h2 className="text-xl font-bold mb-6">Menu</h2>
        <ul className="space-y-4 ">
          <li><a href="/" className="block p-2 hover:bg-gray-700">Home</a></li>
          <li><a href="/about-us" className="block p-2 hover:bg-gray-700">About</a></li>
          <li><a href="/contact" className="block p-2 hover:bg-gray-700">Contact</a></li>
        </ul>
      </div>
    </>
  );
}
