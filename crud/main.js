import express from 'express';
import itemRoutes from './routes/items.route.js'
import connectDB from './lib/db.js';

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
    res.json({ msg: "Hey there! Whatsapp?" });
});

// MIDDLEWARES 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CRUD
app.use("/items", itemRoutes);

// Connect to the database
connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
});