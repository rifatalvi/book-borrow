"use client";
import { Avatar } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../../../public/logo.png";
import { usePathname } from 'next/navigation';

export const navItems = [
  { id: 1, name: 'Home', path: '/', auth: false },
  { id: 2, name: 'All Books', path: '/all-books', auth: false },
  { id: 3, name: 'My Profile', path: '/profile', auth: true },
];

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isLoggedIn = null; 

  return (
    <nav className="sticky top-0 w-full z-50 border-b border-gray-100 bg-white/80 backdrop-blur-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo Section with Hover Effect */}
        <Link
          href="/"
          className="flex items-center gap-2 group transition-transform active:scale-95"
        >
          <div className="relative w-9 h-9 transition-transform group-hover:rotate-6">
            <Image src={logo} alt="BorrowBooks" fill className="object-contain" />
          </div>
          <span className="text-2xl font-black tracking-tight text-indigo-600">
            Borrow<span className="text-indigo-400">Books</span>
          </span>
        </Link>

        {/* Desktop Nav Items with Better Spacing and Indicator */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-semibold">
          {navItems.map(item => (
            <li key={item.id}>
              <Link
                href={item.path}
                className={`relative py-2 transition-colors duration-300 ${
                  pathname === item.path
                    ? 'text-indigo-600'
                    : 'text-gray-500 hover:text-indigo-600'
                }`}
              >
                {item.name}
                {pathname === item.path && (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-indigo-600 rounded-full" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Auth Buttons with Modern Styling */}
        <div className="hidden md:flex items-center gap-5">
          {!isLoggedIn ? (
            <>
              <Link
                href="/auth/signin"
                className="text-sm font-bold text-gray-600 hover:text-indigo-600 transition"
              >
                Sign In
              </Link>

              <Link
                href="/auth/signup"
                className="rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-indigo-100 hover:bg-indigo-700 hover:shadow-indigo-200 transition-all active:scale-95"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <Avatar 
                isBordered 
                as="button" 
                className="transition-transform" 
                color="primary" 
                size="sm" 
                src={isLoggedIn?.image} 
              />
              <button className="rounded-xl bg-red-50 px-5 py-2 text-sm font-bold text-red-600 border border-red-100 hover:bg-red-500 hover:text-white transition-all">
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Icon with Background */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg bg-gray-50 text-gray-700 hover:bg-gray-100 transition"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu with Smooth Slide Animation */}
      <div className={`md:hidden border-t bg-white transition-all duration-300 ease-in-out overflow-hidden ${open ? 'max-h-[400px] border-b' : 'max-h-0'}`}>
        <div className="px-6 py-6 space-y-4">
          {navItems.map(item => (
            <Link
              key={item.id}
              href={item.path}
              onClick={() => setOpen(false)}
              className={`block text-base font-bold ${
                pathname === item.path ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <hr className="border-gray-50" />
          <div className="flex flex-col gap-3">
            {!isLoggedIn ? (
              <>
                <Link href="/auth/signin" className="py-2 text-gray-600 font-bold">Sign In</Link>
                <Link href="/auth/signup" className="rounded-xl bg-indigo-600 py-3 text-center text-white font-bold">Sign Up</Link>
              </>
            ) : (
              <button className="w-full rounded-xl bg-red-500 py-3 text-white font-bold">Logout</button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;