const Router = require("express");
const Blog = require("../Model/BlogModel");

const blogRouter =Router();
//.................All Data of Blogs...........................
blogRouter.get("/",async(req,res)=>{
    let blog =await Blog.find();
     if(!blog){
        return res.status(500).json({message:"Not Found"})
     }else{
        return res.status(202).json({blog});
     }
});

//...............Blog Created...............................
blogRouter.post("/create",async(req,res)=>{
    let Blogdata =await new Blog ({...req.body});

    Blogdata.save((err,data)=>{
     if(!Blogdata){
       return res.status(500).json({message:"unable to add"})
     }else{
     return res.status(202).json({Blogdata})
     }
    })
})

//.....................Edit Blog.......................

blogRouter.get("/edit/:id" ,async(req,res)=>{
    const id = req.params

    let blogData = await new Blog.find({id:_id})
    return res.json(blogData);
});

//.......................Update the Data..................

blogRouter.patch('/edit/:id',async(req,res)=>{
   const {id} =req.params
  console.log(req.body)
   let BlogData = await  Blog.findByIdAndUpdate(id,req.body)

   if(!BlogData){
    return res.status(500).json({mesaage:"Unable to update Blog"})
   }else{
    return res.status(202).json({message: "Blog Updated Sucessfull"})
   }
})

//.....................To Delete Data from Blog ..................

blogRouter.delete('/:id',async(req,res)=>{
    const id =req.params
  console.log(id);
    let deleteBlog =  await new Blog.deleteOne({id:_id})
     if(!deleteBlog){
        return req.status(500).json({message:"Unable to Delete Blog"})
     }else{
        return req.status(202).json({deleteBlog})
     }
})

module.exports =blogRouter;