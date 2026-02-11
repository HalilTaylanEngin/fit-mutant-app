import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Yapılandırma
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware (Ara Yazılımlar)
app.use(express.json()); // JSON gövdesini ayrıştırmak için
app.use(cors()); // Cross-Origin kaynak paylaşımı için

// MongoDB Bağlantısı
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Bağlantısı Başarılı (ES Modules Active)"))
    .catch((err) => console.log("❌ MongoDB Bağlantı Hatası:", err));

// Temel Başlangıç Rotası
app.get('/', (req, res) => {
    res.send('Fit Mutant API Sunucusu modern import yapısıyla çalışıyor...');
});

// Sunucuyu Başlat
app.listen(PORT, () => {
    console.log(`🚀 Sunucu http://localhost:${PORT} adresinde yayında`);
});