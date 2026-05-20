import { useState } from 'react';
import { useLang } from '../context/LangContext';

export default function Gallery() {
  const { t } = useLang();
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [hidden, setHidden] = useState<Set<number>>(new Set());

  return (
    <section id="gallery" className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-xl font-bold text-primary mb-8">{t.gallery.title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {t.gallery.items.map((item, i) => (
            <div
              key={i}
              className={hidden.has(i) ? 'hidden' : 'flex flex-col gap-1.5'}
            >
              <button
                onClick={() => setLightbox(item.src)}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-gray-100 w-full"
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={() => setHidden(prev => new Set(prev).add(i))}
                />
              </button>
              <p className="text-[11px] text-gray-400 leading-snug px-0.5">{item.caption}</p>
            </div>
          ))}
        </div>
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
