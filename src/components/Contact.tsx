import { useLang } from '../context/LangContext';

const ORCID_URL = 'https://orcid.org/0009-0007-9834-1653';
const JNU_PROFILE_URL = 'https://fc.jnu.edu.cn/2022/0524/c33871a701069/page.htm';

export default function Contact() {
  const { t } = useLang();
  return (
    <section id="contact" className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-xl font-bold text-primary mb-6">{t.contact.title}</h2>
        <div className="flex flex-col items-start gap-3">
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

          <a
            href={ORCID_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ORCID profile: 0009-0007-9834-1653"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#a6ce39] transition-colors"
          >
            <span
              aria-hidden="true"
              className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#a6ce39] text-[8px] font-bold leading-none text-white"
            >
              iD
            </span>
            <span>ORCID：0009-0007-9834-1653</span>
          </a>

          <a
            href={JNU_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6M9 11h.01M15 11h.01" />
            </svg>
            <span>{t.contact.facultyPage}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
