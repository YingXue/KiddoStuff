export const BookTags = ({book}) => {
    return (
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
    );
}
