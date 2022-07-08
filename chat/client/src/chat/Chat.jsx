import React, { useState, useEffect } from "react";
import socket from "./io";

const Chat = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    room: "",
    message: "",
  });
  const [isChat, setChat] = useState(true);
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    socket.on("recieved_message", (data) => {
      setMessageList([...messageList, data]);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = () => {
    setChat(false);
    console.log(inputValue);
    socket.emit("join_room", inputValue.room);
  };
  const handleSend = async () => {
    console.log(inputValue);
    await socket.emit("send_messages", inputValue);
    setMessageList([...messageList, inputValue]);
  };
  return isChat ? (
    <div>
      <input
        type="text"
        placeholder="Entername"
        name="name"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Enterroom"
        name="room"
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Enter Room</button>
      <br />
    </div>
  ) : (
    <div>
      <h1>Chat Room</h1>
      <div>
        {messageList.map((item, index) => {
          return (
            <div key={index}>
              {item.name}:{item.message}
            </div>
          );
        })}
      </div>
      <input type="text" placeholder="Entermessage" name ="message" onChange={handleChange} />
      <br />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default Chat;
