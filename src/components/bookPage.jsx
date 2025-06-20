import React from 'react';
import { useTranslation } from 'react-i18next';
import { useBooksFromNotion } from "../hooks/useBooksFromNotion";
import { Borrow } from "./borrow";
import { Tags } from "./tags";
import { BookStatus } from "./bookStatus";
import { BookTags } from "./bookTags";

export const BookPage = () => {
    const { t } = useTranslation();

    const { books, loading } = useBooksFromNotion();

    const [selectedTags, setSelectedTags] = React.useState([]);
    const [selectedBooks, setSelectedBooks] = React.useState([]);

    const toggleBook = (book) => {
        if (book.status !== "Available") {
            return;
        }
        const id = book.id;
        setSelectedBooks((prev) =>
            prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
        );
    };

    const filteredBooks = books.filter((book) =>
        selectedTags.length === 0
        ? true
        : selectedTags.every((tag) => book.tags.includes(tag))
    );

    if (loading) {
        return <div className="p-6">📦 {t('book_page_loading')}</div>;
    }

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">📚 {t('book_page_label')}</h1>

            <Tags books={books} selectedTags={selectedTags} setSelectedTags={setSelectedTags}/>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredBooks.map((book) => (       
                    <div
                        key={book.id}
                        onClick={() => toggleBook(book)}
                        className={`border rounded-lg p-3 cursor-pointer transition ${
                        selectedBooks.includes(book.id)
                            ? "border-blue-500 shadow-lg scale-[1.01]"
                            : "border-transparent hover:shadow-md"
                        }`}
                    >
                        <img
                            src={book.cover}
                            alt={book.title}
                            className="w-full h-60 object-cover rounded"
                        />
                        <h2 className="text-lg font-semibold mt-2">{book.title}</h2>
                        <p className="text-sm text-gray-600 mt-1">{book.description}</p>
                        <BookTags book={book}/>
                        <BookStatus book={book}/>
                    </div>
                ))}
            </div>

            <Borrow selectedBooks={selectedBooks} books={books}/>
        </div>
    );
}
