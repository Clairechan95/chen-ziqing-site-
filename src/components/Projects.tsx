import { useLang } from '../context/LangContext';

export default function Projects() {
  const { t } = useLang();
  const featured = t.projects.items.find(p => p.featured);
  const rest = t.projects.items.filter(p => !p.featured);

  return (
    <section id="projects" className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-xl font-bold text-primary mb-8">{t.projects.title}</h2>

        {/* Featured project */}
        {featured && (
          <div className="mb-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/15 p-6 flex flex-col md:flex-row md:items-center gap-5">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs bg-primary text-white px-2.5 py-0.5 rounded-full font-medium">{featured.tag}</span>
                <span className="text-xs text-gray-400">{featured.year}</span>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{featured.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{featured.desc}</p>
            </div>
            {featured.url && (
              <a
                href={featured.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-1.5 bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-primary/90 transition-colors"
              >
                {featured.cta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        )}

        {/* Other projects */}
        <div className="grid md:grid-cols-3 gap-5">
          {rest.map((proj, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-2">
                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                  {proj.tag}
                </span>
                <span className="text-xs text-gray-400 flex-shrink-0">{proj.year}</span>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-800 mb-1.5">{proj.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{proj.desc}</p>
              </div>
              {proj.stats && (
                <div className="flex flex-wrap gap-1.5 pt-1 border-t border-gray-200">
                  {proj.stats.map((s, j) => (
                    <span key={j} className="text-xs font-semibold text-accent bg-accent/8 px-2 py-0.5 rounded-full">{s}</span>
                  ))}
                </div>
              )}
              {proj.highlights && (
                <ul className="space-y-1">
                  {proj.highlights.map((h, j) => (
                    <li key={j} className="text-xs text-gray-500 flex items-start gap-1.5">
                      <span className="text-accent mt-0.5">✦</span>{h}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
