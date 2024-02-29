// React client code
import React, { useEffect, useState } from "react";
import { Panel } from "react-scroll-to-bottom";
import { io } from "socket.io-client";
import { IoSend } from "react-icons/io5";
import { ScrollToBottom } from "react-scroll-to-bottom";

let socket;

const Chat = (props) => {
  const { userValue } = props;
  const [messages, setMessages] = useState([]);
  const [messageValue, setMessageValue] = useState("");
 

  const sendMessage = (e) => {
    e.preventDefault();
    if (messageValue.trim().length > 0) {
      
      socket.emit("message", { messageValue });
      setMessageValue("");
    }
  };

  useEffect(() => {
    socket = io("http://localhost:8080");

    socket.emit("joined", { name: userValue });

    socket.on("welcome", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
      // console.log(data.user, data.message);
    });

    socket.on("userJoined", (data) => {
      
      setMessages((prevMessages) => [...prevMessages, data]);
      // console.log(data.user, data.message);
    });

    socket.on("userDisconnected", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
      console.log(data.user, data.message);
    });

    socket.on("sendMessage", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [userValue]);


 
  return (
    <div className="main login-body">
      <div className="chat-box">
        <div className="chat-container">
          <h1> <img src="./assets/images/chat-logo.png" alt="" /> {userValue}</h1>
          <div className="main-container">
            <Panel className="scroll-to-bottom">
              {messages.map((message, i) => (
                <div
                  key={i}
                  className={`message ${
                    message.userId === socket.id ? "sent" : "received"
                  }`}
                >
                  <span className="message-content">
                    <span className="user-icon">
                      {message.userId === socket.id ? "You" : message.user} 
                    </span>
                    <span className="message-text">

                    { message.message}
                    </span>
                  </span>
                </div>
              ))}
            </Panel>
          </div>

          <div className="controller">
            <form className="w-100 d-flex">
              <input
                onChange={(e) => setMessageValue(e.target.value)}
                className="form-control"
                placeholder="Enter your message here"
                value={messageValue}
              />
              <div className="checkbox">
                <button
                  id="send"
                  className="btn btn-primary"
                  onClick={sendMessage}
                >
                  <IoSend />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

     
     </div>
  );
};

export default Chat;
