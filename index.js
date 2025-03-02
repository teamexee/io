const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// فعال کردن CORS (برای دسترسی از همه دستگاه‌ها)
app.use(cors());
app.use(bodyParser.json());

let messages = []; // آرایه‌ای برای ذخیره پیام‌ها

// دریافت تمام پیام‌ها
app.get("/messages", (req, res) => {
    res.json(messages);
});

// ارسال پیام جدید
app.post("/messages", (req, res) => {
    const { name, message } = req.body;
    if (name && message) {
        messages.push({ name, message });
        res.json({ success: true });
    } else {
        res.json({ success: false, error: "نام و پیام ضروری هستند!" });
    }
});

// راه‌اندازی سرور
const path = require("path");

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/style.css", (req, res) => {
    res.sendFile(path.join(__dirname, "style.css"));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
