import { useTranslation } from 'react-i18next';
import { BookPage } from "./bookPage";

export function HomePage() {
   const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const nextLang = i18n.language === 'zh' ? 'en' : 'zh';
        i18n.changeLanguage(nextLang);
        localStorage.setItem('lang', nextLang); // save the selected language
    };

  return (
    <div className="bg-gray-50 min-h-screen px-8 py-16 md:px-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                {t('book_home_title')} 📚
            </h1>
            <p className="text-lg text-gray-600">
                {t('book_home_greeting')} 🌟
            </p>
            <button onClick={toggleLanguage} className={`fixed top-2 right-4 right-4`}>
                {i18n.language === 'zh' ? 'Switch to English' : '切换到中文'}
            </button>
        </div>

      <BookPage/>
    </div>
  );
}
