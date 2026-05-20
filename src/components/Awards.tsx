import { useLang } from '../context/LangContext';

export default function Awards() {
  const { t } = useLang();
  return (
    <section id="awards" className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-xl font-bold text-primary mb-8">{t.awards.title}</h2>
        <div className="space-y-3">
          {t.awards.items.map((award, i) => (
            <div key={i} className="flex items-baseline gap-4">
              <span className="text-sm font-medium text-accent w-10 flex-shrink-0">{award.year}</span>
              <span className="text-sm text-gray-600">{award.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
