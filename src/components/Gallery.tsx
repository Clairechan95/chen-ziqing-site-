import { useState } from 'react';
import { useLang } from '../context/LangContext';

export default function Gallery() {
  const { t } = useLang();
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [hidden, setHidden] = useState<Set<number>>(new Set());

  const visible = t.gallery.items.filter((_, i) => !hidden.has(i));

  return (
    <section id="gallery" className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-xl font-bold text-primary mb-8">{t.gallery.title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {t.gallery.items.map((item, i) => (
            <button
              key={i}
              onClick={() => setLightbox(item.src)}
              className={`group relative overflow-hidden rounded-xl aspect-[4/3] bg-gray-100 text-left ${hidden.has(i) ? 'hidden' : ''}`}
            >
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={() => setHidden(prev => new Set(prev).add(i))}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-3">
                <p className="text-white text-[11px] leading-snug">{item.caption}</p>
              </div>
            </button>
          ))}
        </div>
        {visible.length === 0 && null}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt=""
            className="max-w-full max-h-[90vh] rounded-xl object-contain shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
