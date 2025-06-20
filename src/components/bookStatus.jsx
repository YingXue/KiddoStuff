import { useTranslation } from 'react-i18next';

export const BookStatus = ({book}) => {
    const { t } = useTranslation();

    return (
        <p className={`text-xs mt-2 font-medium inline-block px-2 py-0.5 rounded-full
                ${
                book.status === "Available"
                    ? "bg-green-100 text-green-700"
                    : book.status === "Lent"
                    ? "bg-red-100 text-red-700"
                    : "bg-yellow-100 text-yellow-800"
                }
            `}
        >
            {t('book_page_book_status')}: {book.status}
        </p>
    );
}
