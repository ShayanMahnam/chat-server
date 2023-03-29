import React from "react";
import { FiTrash, FiEdit } from "react-icons/fi";


interface Message {
  id: number;
  from: string;
  text: string;
}

interface Props {
  messages: Message[];
  onDeleteMessage: (id: number) => void;
}

function Messages({ messages, onDeleteMessage }: Props) {
  const handleAlert = () => {
    alert("update messages will be new feature in future")
  }
  const colors = [
    "primary",
    "secondary",
    "accent",
    "info",
    "success",
    "warning",
    "error",
  ];

  const align = ["start", "end"];

  return (
    <div className="flex justify-center">
      <ul className="flex flex-col p-3 rounded-lg w-8/12 md:w-4/12 bg-white">
        {messages.map((message, index) =>
          index % 2 === 0 ? (
            <div className="self-start ml-1" key={message.id}>
              <li
                className={`chat chat-${
                  align[index % align.length]
                } flex items-center`}
                key={message.id}
              >
                <strong>{message.from}</strong>
                <p
                  className={`chat-bubble chat-bubble-${
                    colors[index % colors.length]
                  }`}
                >
                  {message.text}
                </p>
                <FiEdit
                  className="cursor-pointer"
                  onClick={() => handleAlert()}
                />
                <FiTrash
                  className="cursor-pointer"
                  onClick={() => onDeleteMessage(message.id)}
                />
              </li>
            </div>
          ) : (
            <div className="self-end mr-1" key={message.id}>
              <li
                className={`chat chat-${
                  align[index % align.length]
                } flex items-center`}
                key={message.id}
              >
                <FiTrash
                  className="cursor-pointer"
                  onClick={() => onDeleteMessage(message.id)}
                />
                <FiEdit
                  className="cursor-pointer"
                  onClick={() => handleAlert()}
                />
                <p
                  className={`chat-bubble chat-bubble-${
                    colors[index % colors.length]
                  }`}
                >
                  {message.text}
                </p>
                <strong>{message.from}</strong>
              </li>
            </div>
          )
        )}
      </ul>
    </div>
  );
}

export default Messages;
