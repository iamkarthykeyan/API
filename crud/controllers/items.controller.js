import Item from "../models/item.model.js";

export const ItemIndex = async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const ItemCreate = async (req, res) => {
    const { title, desc } = req.body;

    try {
        // Check if an item with the same title already exists
        const existingItem = await Item.findOne({ title });
        if (existingItem) {
            return res.status(400).json({ message: "Title already exists. Please use a unique title." });
        }

        // If no duplicate found, proceed with saving the new item
        const newItem = new Item({ title, desc });
        const item = await newItem.save();
        return res.status(200).json(item);

    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const ItemUpdate = async (req, res) => {
    try {
        const updatedItem = await Item.findOneAndUpdate(
            { _id: req.params.id },
            {
                title: req.body.title,
                desc: req.body.desc,
            },
            {
                new: true, // Return the updated document
            }
        );
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


export const ItemDelete = async (req, res) => {
    const itemId = req.params.id;
    try {
        await Item.deleteOne({ _id: itemId });
        res.status(200).json({ message: "Item deleted successfully." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
