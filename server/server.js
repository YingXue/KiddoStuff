import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const allowedOrigins = [
  'http://localhost:5173',
  'https://yingxue.github.io'
];

app.use(cors({
      origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST'],
}));
app.use(express.json());

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;
const PORT = process.env.PORT || 3001;

app.post("/api/notion-books", async (req, res) => {
    try {
        const response = await axios.post(
            `https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${NOTION_API_KEY}`,
                    "Notion-Version": "2022-06-28",
                    "Content-Type": "application/json",
                },
            }
        );

        res.json(response.data);
    } catch (error) {
        console.error("Notion API error:", error.message);
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
