"use client";
import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
        className="text-slate-400 hover:text-white transition-colors p-1"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      {open && (
        <div
          className="absolute top-full left-0 right-0 py-3 border-b"
          style={{
            background: "rgba(2,6,23,0.98)",
            backdropFilter: "blur(12px)",
            borderColor: "rgba(255,255,255,0.06)",
          }}
        >
          {["About", "Experience", "Education", "Personal"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block font-sans text-sm text-slate-400 hover:text-amber-400 transition-colors px-6 py-3 tracking-wide"
            >
              {item}
            </a>
          ))}
          <div className="px-6 pt-2 pb-1">
            <a
              href="mailto:shen12christie@gmail.com"
              onClick={() => setOpen(false)}
              className="block font-sans bg-amber-400 text-slate-950 py-2.5 rounded-full text-sm font-semibold text-center hover:bg-amber-300 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
