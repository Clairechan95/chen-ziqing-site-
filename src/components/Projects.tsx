import { useLang } from '../context/LangContext';

export default function Projects() {
  const { t } = useLang();
  return (
    <section id="projects" className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-xl font-bold text-primary mb-8">{t.projects.title}</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {t.projects.items.map((proj, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <div className="flex items-start justify-between gap-2 mb-3">
                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                  {proj.tag}
                </span>
                <span className="text-xs text-gray-400 flex-shrink-0">{proj.year}</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">{proj.name}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{proj.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
