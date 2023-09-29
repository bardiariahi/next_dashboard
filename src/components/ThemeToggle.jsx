"use client"
import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    if (typeof window !== "undefined") {
      let userTheme = JSON.parse(localStorage.getItem('userTheme')) || ""
      if (userTheme === 'dark') {
        body.classList.remove('dark');
        localStorage.removeItem('userTheme')
      } else {
        body.classList.add('dark');
        localStorage.setItem('userTheme', 'dark')
      }
    } else {
      if (isDarkMode) {
        body.classList.add('dark');
        localStorage.setItem('userTheme', 'dark')
      } else {
        body.classList.remove('dark');
        localStorage.removeItem('userTheme')
      }
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <button className="px-4 py-2" onClick={toggleTheme}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeToggle;