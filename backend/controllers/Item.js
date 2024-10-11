const Item=require('../models/items.js');
exports.getItems = async (req, res) => {
    try {
        const items = await Item.find();
        if(items.length===0)
        {
            return res.status(404).json({
                success: false,
                error: "No items found",
            });
        }
        res.status(200).json({
            success: true,
            count: items.length,
            data: items,
        });
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
}
exports.getoneItem = async (req, res) => {
    try {
        const items = await Item.findOne({ item_id: req.params.id });
        if (items.length === 0) {
            return res.status(404).json({
                success: false,
                error: "No items found",
            });
        }
        res.status(200).json({
            success: true,
            count: items.length,
            data: items,
        });
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
}
exports.getbygodown = async (req, res) => {
    try {
        
        const items = await Item.find({godown_id: req.params.id });
        if (items.length === 0) {
            return res.status(404).json({
                success: false,
                error: "No items found",
            });
        }
        res.status(200).json({
            success: true,
            count: items.length,
            data: items,
        });
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
}