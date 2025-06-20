import { useTranslation } from 'react-i18next';

export function Borrow({books, selectedBooks}) {
    const { t } = useTranslation();

    const selectedList = books.filter((b) => selectedBooks.includes(b.id));
    const mailBody = encodeURIComponent(
        selectedList.map((b) => `- ${b.title}`).join("\n")
    );

    return (
            <a
                href={
                    selectedBooks.length > 0
                    ? `mailto:kalian1127@gmail.com?subject=[Books] I want to borrow some books&body=${mailBody}`
                    : undefined
            }
                className={`top-2 px-4 py-2 rounded-full shadow-sm transition-all
                    ${selectedBooks.length > 0 ? "bg-blue-600 text-white cursor-pointer" : "bg-gray-300 text-gray-600 cursor-default"}
                `}
                onClick={(e) => {
                    if (selectedBooks.length === 0) {
                        e.preventDefault();
                        alert(t('book_page_pick'));
                    }
                }}
            >
                {selectedBooks.length > 0 ? `📧 ${t('book_page_email', {count: selectedBooks.length})}` : `🛒 ${t('book_page_borrow')}`}
            </a>
    );
}
