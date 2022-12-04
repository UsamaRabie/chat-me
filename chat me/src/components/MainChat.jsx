import React, { useContext } from "react";
import Message from "./Message";
import InputText from "./InputText";
import { ChatContext } from "../context/ChatContext";
const MainChat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
         <i className="fa-solid fa-camera"></i>
         <i className="fa-solid fa-user"></i>
          <i className="fa-solid fa-ellipsis"></i>
      

        </div>
      </div>
        <Message></Message>
        <InputText></InputText>
    </div>
  )
}

export default MainChat
