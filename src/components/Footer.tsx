import { useLang } from '../context/LangContext';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-primary text-white/60 py-8 text-center text-xs">
      <p>{t.footer.text}</p>
      <p className="mt-1">© {new Date().getFullYear()}</p>
    </footer>
  );
}
