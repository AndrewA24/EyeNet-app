// components/NavBar.jsx

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (!mounted) return;
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Site Logo / Title */}
        <Link href="/">
          <a className="text-2xl font-semibold text-gray-800 dark:text-white">
            EyeNet
          </a>
        </Link>

        {/* Navigation Links (hidden on mobile) */}
        <div className="hidden md:flex space-x-6">
          <Link href="#features">
            <a className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Features
            </a>
          </Link>
          <Link href="#about">
            <a className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              About EyeNet
            </a>
          </Link>
        </div>

        {/* Actions: Theme Toggle & Sign In */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {mounted ? (theme === 'dark' ? '☀️' : '🌙') : null}
          </button>

          {/* Sign In Button */}
          <Link href="/signin">
            <a className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Sign In
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

