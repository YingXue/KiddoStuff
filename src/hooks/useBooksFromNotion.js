import { useEffect, useState } from "react";

export const useBooksFromNotion = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const apiBaseUrl =
        import.meta.env.MODE === "development"
            ? "http://localhost:3001"
            : "https://kiddostuff.onrender.com";
        const fetchBooks = async () => {
            const res = await fetch(`${apiBaseUrl}/api/notion-books`, {
                method: "POST",
            });

            const data = await res.json();

            const books = data.results.map((page) => {
                const props = page.properties;

                return {
                    id: page.id,
                    title: props.Title?.title?.[0]?.plain_text || "Untitled",
                    description: props.Description?.rich_text?.[0]?.plain_text || "",
                    status: props.Status?.select?.name || "",
                    tags: props.Tags?.multi_select?.map((t) => t.name) || [],
                    cover: props.Media?.files?.[0]?.file?.url || "", // 临时链接
                };
            });

            setBooks(books);
            setLoading(false);
        };

        fetchBooks();
    }, []);

    return { books, loading };
};
