"use client";
import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
        className="text-[#1C1C1C] p-1"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <line x1="3" y1="7" x2="21" y2="7" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="17" x2="21" y2="17" />
          </svg>
        )}
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-[#E8E3DC] py-3 shadow-sm">
          {["About", "Experience", "Education", "Personal"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block font-sans text-sm text-[#5A5550] hover:text-[#1C1C1C] transition-colors px-6 py-3"
            >
              {item}
            </a>
          ))}
          <div className="px-6 pt-2 pb-2">
            <a
              href="mailto:shen12christie@gmail.com"
              onClick={() => setOpen(false)}
              className="block font-sans bg-[#1C1C1C] text-white text-xs text-center tracking-widest uppercase py-3 hover:bg-[#3C3C3C] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
