export const ItemIndex = (req, res)=>{
    res.send("Get all the items list");
};

export const ItemCreate = (req,res) =>{
     res.send("Created a item");
};

export const ItemUpdate = (res,req)=>{
    res.send("Updated a item");
}

export const ItemDelete = (res,req)=>{
    res.send("Deleted a item");
}