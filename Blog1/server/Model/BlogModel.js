const {Schema,model} =require("mongoose")

const BlogSchema = new Schema({
    id:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    CreatedAt:{
        type:Number,
        required:true
    },
    UpdatedAt:{
        type:Number,
        required:true
    },
    Delete:{
        type:Boolean,
        required:true
    }
});

const Blog = model("blogdata",BlogSchema);

module.exports =Blog
