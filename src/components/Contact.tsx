import { useLang } from '../context/LangContext';

export default function Contact() {
  const { t } = useLang();
  return (
    <section id="contact" className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-xl font-bold text-primary mb-6">{t.contact.title}</h2>
        <a
          href="mailto:chenziqing95@hotmail.com"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>{t.contact.email}：chenziqing95@hotmail.com</span>
        </a>
      </div>
    </section>
  );
}
