const godown=require('../models/Godown.js');
exports.getGodowns=async(req,res)=>{
    try{
        const godowns=await godown.find({parent_godown:null});
        if(godowns.length===0)
        {
            return res.status(404).json({ 
                 
                success: false,
                error: "No godowns found",
            });
        }
        res.status(200).json({
            success: true,
            count: godowns.length,
            data: godowns,
        });
    }
    catch(err)
    {
        res.status(500).json({ error: "Server error" });
    }
};
exports.getonegodown=async(req,res)=>{
    try{
        const godowns=await godown.findOne({id:req.params.id});
        if(godowns.length===0)
        {
            return res.status(404).json({ 
                 
                success: false,
                error: "No godowns found",
            });
        }
        res.status(200).json({
            success: true,
            count: godowns.length,
            data: godowns,
        });
    }
    catch(err)
    {
        res.status(500).json({ error: "Server error" });
    }
};
exports.getsubgodowns=async(req,res)=>{
    try{
        const godowns=await godown.find({parent_godown:req.params.id});
        if(godowns.length===0)
        {
            return res.status(404).json({ 
                 
                success: false,
                error: "No subgodowns found",
            });
        }
        res.status(200).json({
            success: true,
            count: godowns.length,
            data: godowns,
        });
    }
    catch(err)
    {
        res.status(500).json({ error: "Server error" });
    }
}
exports.searchGodownsbyname = async (req, res) => {
    const { name } = req.query; // Get the search query from the request query string

    try {
        // Create a regex for partial matching, ignoring case
        const regex = new RegExp(name, 'i');

        // Find godowns whose name matches the regex
        const godowns = await godown.find({ name: regex });
        res.json(godowns);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};