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
      <ul className="flex flex-col p-3 rounded-lg w-11/12 md:w-6/12 bg-white">
        {messages.map((message, index) =>
          index % 2 === 0 ? (
            <div className="self-start ml-1" key={message.id}>
              <li
                className={`chat chat-${
                  align[index % align.length]
                } flex items-center`}
                key={message.id}
              >
                <strong className="dark:text-black">{message.from}</strong>
                <p
                  className={`chat-bubble chat-bubble-${
                    colors[index % colors.length]
                  } dark:text-white`}
                >
                  {message.text}
                </p>
                <div className="flex flex-col md:flex-row gap-1">
                  <FiEdit
                    className="cursor-pointer dark:text-black"
                    onClick={() => handleAlert()}
                  />
                  <FiTrash
                    className="cursor-pointer dark:text-black"
                    onClick={() => onDeleteMessage(message.id)}
                  />
                </div>
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
                <div className="flex flex-col md:flex-row gap-1">
                  <FiTrash
                    className="cursor-pointer dark:text-black"
                    onClick={() => onDeleteMessage(message.id)}
                  />
                  <FiEdit
                    className="cursor-pointer dark:text-black"
                    onClick={() => handleAlert()}
                  />
                </div>

                <p
                  className={`chat-bubble chat-bubble-${
                    colors[index % colors.length]
                  } dark:text-white`}
                >
                  {message.text}
                </p>
                <strong className="dark:text-black">{message.from}</strong>
              </li>
            </div>
          )
        )}
      </ul>
    </div>
  );
}

export default Messages;
