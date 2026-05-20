import { useLang } from '../context/LangContext';

export default function Publications() {
  const { t } = useLang();
  return (
    <section id="publications" className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-xl font-bold text-primary mb-8">{t.publications.title}</h2>
        <div className="space-y-6">
          {t.publications.items.map((pub, i) => (
            <div key={i} className="flex gap-4">
              <span className="text-sm text-gray-400 w-10 flex-shrink-0 pt-0.5">{pub.year}</span>
              <div className="border-l-2 border-accent pl-4">
                {pub.url ? (
                  <a href={pub.url} target="_blank" rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-800 italic hover:text-primary transition-colors">
                    {pub.title}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-gray-800 italic">{pub.title}</p>
                )}
                {pub.titleFr && pub.titleFr !== pub.title && (
                  <p className="text-xs text-gray-500 mt-0.5">{pub.titleFr}</p>
                )}
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="text-xs bg-blue-50 text-accent px-2 py-0.5 rounded-full">{pub.journal}</span>
                  <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{pub.level}</span>
                  <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{pub.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
