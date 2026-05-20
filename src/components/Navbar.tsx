import { useState } from 'react';
import { useLang } from './../context/LangContext';
import type { Lang } from '../context/LangContext';

const langs: { code: Lang; label: string }[] = [
  { code: 'zh', label: '中' },
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
];

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#experience', label: t.nav.experience },
    { href: '#publications', label: t.nav.publications },
    { href: '#teaching', label: t.nav.teaching },
    { href: '#projects', label: t.nav.projects },
    { href: '#awards', label: t.nav.awards },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Name */}
        <a href="#" className="font-semibold text-primary text-sm tracking-wide">
          Chen Ziqing
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-500 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          {/* Language switcher */}
          <div className="flex items-center gap-1 ml-4 border border-gray-200 rounded-full px-1 py-0.5">
            {langs.map(l => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-2.5 py-0.5 rounded-full text-xs font-medium transition-all ${
                  lang === l.code
                    ? 'bg-primary text-white'
                    : 'text-gray-400 hover:text-gray-700'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-500"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-4">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-gray-600 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-1 mt-3 border border-gray-200 rounded-full px-1 py-0.5 w-fit">
            {langs.map(l => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-2.5 py-0.5 rounded-full text-xs font-medium transition-all ${
                  lang === l.code ? 'bg-primary text-white' : 'text-gray-400'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
