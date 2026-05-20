import { useLang } from '../context/LangContext';

export default function Experience() {
  const { t } = useLang();
  return (
    <section id="experience" className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-xl font-bold text-primary mb-8">{t.experience.title}</h2>
        <div className="space-y-6">
          {t.experience.items.map((item, i) => (
            <div key={i} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                {i < t.experience.items.length - 1 && (
                  <div className="w-px flex-1 bg-gray-200 mt-1" />
                )}
              </div>
              <div className="pb-6">
                <p className="text-sm font-semibold text-gray-800">{item.role}</p>
                <p className="text-sm text-accent mt-0.5">{item.org}</p>
                <p className="text-xs text-gray-400 mt-0.5">{item.period} · {item.location}</p>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
