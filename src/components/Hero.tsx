import { useState } from 'react';
import { useLang } from '../context/LangContext';

const BILIBILI_URL = 'https://space.bilibili.com/499064854';

export default function Hero() {
  const { t } = useLang();
  const [qrOpen, setQrOpen] = useState(false);
  return (
    <section className="pt-28 pb-20 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <img
            src="/avatar.webp"
            alt="Chen Ziqing"
            className="w-36 h-36 rounded-full object-cover object-top shadow-md ring-4 ring-primary/10"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-primary">{t.hero.name}</h1>
          <p className="text-gray-400 text-sm mt-0.5">{t.hero.nameEn}</p>
          <p className="mt-3 text-gray-700 font-medium">{t.hero.title}</p>
          <p className="text-gray-500 text-sm">{t.hero.department}</p>
          <p className="text-gray-500 text-sm">{t.hero.institution}</p>
          <p className="mt-4 text-sm text-accent">{t.hero.research}</p>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-4 mt-3">
            <a
              href={`mailto:${t.hero.email}`}
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-primary transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {t.hero.email}
            </a>

            <a
              href={BILIBILI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#00a1d6] transition-colors"
            >
              {/* Bilibili icon */}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.373.56.373.933v1.707c0 .373-.124.684-.373.933-.249.25-.56.373-.933.373s-.684-.124-.933-.373c-.25-.249-.373-.56-.373-.933v-1.707c0-.373.124-.684.373-.933.249-.249.56-.373.933-.373zm8 0c.373 0 .684.124.933.373.25.249.373.56.373.933v1.707c0 .373-.124.684-.373.933-.249.25-.56.373-.933.373s-.684-.124-.933-.373c-.25-.249-.373-.56-.373-.933v-1.707c0-.373.124-.684.373-.933.249-.249.56-.373.933-.373z"/>
              </svg>
              {t.hero.bilibili}
            </a>

            {/* WeChat Video Channel with QR lightbox */}
            <span
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 cursor-pointer hover:text-[#07c160] transition-colors"
              onClick={() => setQrOpen(true)}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.045c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.49.49 0 0 1 .178-.553C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-7.062-6.122zm-3.74 2.632c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm5.4 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/>
              </svg>
              {t.hero.wechat}
            </span>

            {/* WeChat QR lightbox overlay */}
            {qrOpen && (
              <div
                className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-6"
                onClick={() => setQrOpen(false)}
              >
                <div className="bg-white rounded-2xl p-5 shadow-2xl flex flex-col items-center gap-3 max-w-xs w-full"
                  onClick={e => e.stopPropagation()}>
                  <p className="text-sm font-medium text-gray-700">{t.hero.wechat}</p>
                  <img src="/wechat-qr.webp" alt="WeChat QR" className="w-full object-contain rounded-lg" />
                </div>
                <button
                  onClick={() => setQrOpen(false)}
                  className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
