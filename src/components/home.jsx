import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { BookPage } from "./bookPage";

export function HomePage() {
   const { t, i18n } = useTranslation();
   const [lang, setLang] = React.useState(i18n.language);

    const toggleLanguage = () => {
        const nextLang = i18n.language === 'zh' ? 'en' : 'zh';
        i18n.changeLanguage(nextLang);
        setLang(nextLang); // 更新以触发重新渲染
        localStorage.setItem('lang', nextLang); // save the selected language
    };

    return (
        <div className="bg-gray-50 min-h-screen px-8 py-16 md:px-16">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <AnimatePresence mode="wait">
                    <motion.h1
                        key={`title-${lang}`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 min-h-[4rem]"
                    >
                        {t('book_home_title')} 📚
                    </motion.h1>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    <motion.p
                        key={`desc-${lang}`}
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.3 }}
                        className="text-lg text-gray-600 min-h-[2.5rem]"
                    >
                        {t('book_home_greeting')} 🌟
                    </motion.p>
                </AnimatePresence>

                <button
                    onClick={toggleLanguage}
                    className="fixed top-2 right-4 px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-sm"
                >
                    {lang === 'zh' ? 'Switch to English' : '切换到中文'}
                </button>
            </div>
            <BookPage/>
        </div>
    );
}
