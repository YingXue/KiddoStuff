import React from 'react';
import { useTranslation } from 'react-i18next';
import { useBooksFromNotion } from "../hooks/useBooksFromNotion";

export const BookPage = () => {
    const { t } = useTranslation();

    const { books, loading } = useBooksFromNotion();
    const allTags = Array.from(
        new Set(books.flatMap((book) => book.tags))
    );
    const [selectedTags, setSelectedTags] = React.useState([]);
    const [selectedBooks, setSelectedBooks] = React.useState([]);

    const toggleTag = (tag) => {
        setSelectedTags((prev) =>
        prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    };

    const toggleBook = (book) => {
        if (book.status !== "Available") {
            // alert(`这本书现在是 ${book.status} 状态，不能借哦！`);
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

    const selectedList = books.filter((b) => selectedBooks.includes(b.id));
    const mailBody = encodeURIComponent(
        selectedList.map((b) => `- ${b.title}`).join("\n")
    );

    if (loading) {
        return <div className="p-6">📦 {t('book_page_loading')}</div>;
    }

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">📚 {t('book_page_label')}</h1>

            <div className="mb-4 flex flex-wrap gap-2">
                {allTags.map((tag) => (
                <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1 rounded-full border text-sm ${
                    selectedTags.includes(tag)
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                >
                    {tag}
                </button>
                ))}
            </div>

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
                    <div className="flex flex-wrap gap-1 mt-2">
                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full"
                        >
                        {tag}
                        </span>
                    ))}
                    </div>
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
                        状态：{book.status}
                        </p>
                    </div>
                ))}
            </div>

            <a
                href={
                    selectedBooks.length > 0
                    ? `mailto:you@example.com?subject=我要借书&body=${mailBody}`
                    : undefined
            }
                className={`fixed top-2 left-4 left-4 px-4 py-2 rounded-full shadow-lg transition-all
                    ${selectedBooks.length > 0 ? "bg-blue-600 text-white cursor-pointer" : "bg-gray-300 text-gray-600 cursor-default"}
                `}
                onClick={(e) => {
                    if (selectedBooks.length === 0) {
                        e.preventDefault(); // 阻止打开邮件
                        alert("请先选择想借的书哦 📚");
                    }
                }}
            >
                {selectedBooks.length > 0 ? `📧 ${t('book_page_email', {count: selectedBooks.length})}` : `📚 ${t('book_page_borrow')}`}
            </a>
        </div>
    );
}
