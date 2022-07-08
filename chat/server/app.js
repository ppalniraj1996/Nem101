const express = require("express");
const socket = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors({ origin:"http:localhost:3000/"}));


app.get("/", (req, res) => {
  res.send("Hello");
});

const server = app.listen(4000, () => {
  console.log("start");
});

const io = socket(server,{
  cors:{
    origin:"*"
  }
  
});

io.on("connection", (socket) => {
  console.log(socket.id);

  socket.on("join_room", (data) => {
    // console.log("room:",data);
    socket.join(data);
  });

  socket.on("send_messages", (data) => {
    // console.log("messageSend:",data);
    socket.to(data.room).emit("recieved_message", data);
  });

  socket.on("disconnect", () => {
    console.log("user is disconnected");
  });
});
