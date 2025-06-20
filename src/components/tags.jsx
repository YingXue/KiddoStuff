export const Tags = ({books, selectedTags, setSelectedTags}) => {
    const allTags = Array.from(
        new Set(books.flatMap((book) => book.tags))
    );

    const toggleTag = (tag) => {
        setSelectedTags((prev) =>
        prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    };

    return (
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
    );
}
