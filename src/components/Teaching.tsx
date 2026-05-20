import { useLang } from '../context/LangContext';

export default function Teaching() {
  const { t } = useLang();
  return (
    <section id="teaching" className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-xl font-bold text-primary mb-2">{t.teaching.title}</h2>
        <p className="text-sm text-gray-500 mb-8">{t.teaching.subtitle}</p>
        <div className="flex flex-wrap gap-2">
          {t.teaching.courses.map((course, i) => (
            <span
              key={i}
              className="text-sm bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-lg"
            >
              {course}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
