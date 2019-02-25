exports.getPosts = (req,res,next)=>{
    res.json({
        posts:[{title:'First',content:'The First App'}]
    });
};


exports.createPosts = (req,res,next) =>{
    const title = req.body.title;
    const content = req.body.content;

    res.status(201).json({
        message:'Post created',
        post:{id:new Date().toISOString(),title:title,content:content}
    });
};
