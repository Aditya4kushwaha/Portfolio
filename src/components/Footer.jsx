import React from 'react';

export const Footer = () => {
  return (
    <footer className="w-full mt-24 border-t-[3px] border-[var(--border-color)] bg-[var(--card-bg)] transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-[var(--text-main)] font-outfit font-black uppercase tracking-tight text-xl">
              Aditya Kushwaha
            </h3>
            <p className="text-[var(--subtext-color)] font-outfit font-bold text-xs uppercase tracking-wider mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-[var(--text-main)] font-outfit font-black uppercase tracking-wider text-xs bg-[var(--accent-neon)] hover:text-black border-2 border-[var(--border-color)] px-3 py-1.5 brutalist-shadow-sm inline-block">
              Made with <span className="text-red-600">♥</span> by AdityaXdev
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

