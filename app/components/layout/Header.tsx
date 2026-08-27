"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/MAIN-LOGO.png";

const navItems = [
  "Platform",
  "Solutions",
  "Modules",
  "Customers",
  "Resources",
  "Company",
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative w-full bg-white">
      <div className="container">
        <div className="flex items-center justify-between gap-4 py-4 lg:py-5">
          <Link href="/" className="inline-flex items-center">
            <Image
              src={logo}
              alt="Blogtec Software"
              priority
              className="h-10 w-auto sm:h-12"
            />
          </Link>

          <nav className="hidden lg:flex items-center justify-center gap-8 text-[16px] font-medium text-[#111827]">
            {navItems.map((item) => (
              <Link
                key={item}
                href="#"
                className="transition-colors duration-200 hover:text-[#c26f00]"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-[#12264f] px-6 py-3 text-sm font-medium text-white shadow-[0_8px_24px_rgba(18,38,79,0.18)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#0f2142]"
            >
              Schedule Demo
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-[#E5E7EB] p-3 text-[#12264f] transition-colors duration-200 hover:bg-[#F9FAFB] lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`lg:hidden overflow-hidden border-t border-[#ECE7DD] transition-all duration-300 ${
            isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-4 py-5 text-[16px] font-medium text-[#111827]">
            {navItems.map((item) => (
              <Link
                key={item}
                href="#"
                className="transition-colors duration-200 hover:text-[#c26f00]"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link
              href="#"
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[#12264f] px-6 py-3 text-sm font-medium text-white shadow-[0_8px_24px_rgba(18,38,79,0.18)] transition-transform duration-200 hover:bg-[#0f2142]"
              onClick={() => setIsOpen(false)}
            >
              Schedule Demo
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
