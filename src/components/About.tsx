import { useLang } from '../context/LangContext';

export default function About() {
  const { t } = useLang();
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold text-primary mb-4">{t.about.title}</h2>
          <p className="text-gray-600 leading-relaxed text-sm text-justify">{t.about.bio}</p>
          <a
            href="https://ouiouiai.pages.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-sm text-primary hover:underline font-medium"
          >
            {t.about.projectLabel}
          </a>
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
              {t.education.title}
            </h3>
            <div className="space-y-4">
              {t.education.items.map((item, i) => (
                <div key={i}>
                  <p className="text-sm font-medium text-gray-800">{item.degree}</p>
                  <p className="text-xs text-gray-500">{item.school}</p>
                  <p className="text-xs text-gray-400">{item.year}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
              {t.languages.title}
            </h3>
            <div className="space-y-2">
              {t.languages.items.map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">{item.lang}</span>
                  <span className="text-xs text-gray-400">{item.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
