import express from 'express';
import itemRoutes from './routes/items.route.js'

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
    res.json({ msg: "Hey there! Whatsapp?" });
});

// MIDDLEWARES 
app.use("/items", itemRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
});