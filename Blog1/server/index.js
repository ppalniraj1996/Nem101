const express =require("express");
const connection =require("./MongoDb");
const blogRouter =require("./Route/blogroutes");

const app = express();
app.use(express.json());

app.use('/',blogRouter)
app.use('/blogs',blogRouter)

app.listen(8080, async()=>{
    await connection;
    console.log("Server is Started at Port 8080");
})