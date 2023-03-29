import React from "react";
import { FiTrash, FiEdit } from "react-icons/fi";
interface Message {
  id: number;
  from: string;
  text: string;
}

interface Props {
  messages: Message[];
}

function Messages({ messages }: Props) {
  const colors = [
    "primary",
    "secondary",
    "accent",
    "info",
    "success",
    "warning",
    "error",
  ];

  const align = [
    "start",
    "end"
  ]

  // const getRandomColor = () => {
  //   const randomIndex = Math.floor(Math.random() * colors.length);
  //   return colors[randomIndex];
  // };

  return (
    <div>
      <ul className="flex flex-col justify-center items-center">
        {messages.map((message, index) => (
          <li
            className={`chat chat-${
              align[index % align.length]
            } flex justify-center items-center`}
            key={message.id}
          >
            {index % 2 === 0 ? (
              <>
                <strong>{message.from}</strong>
                <p
                  className={`chat-bubble chat-bubble-${
                    colors[index % colors.length]
                  }`}
                >
                  {message.text}
                </p>
                <FiEdit />
                <FiTrash />
              </>
            ) : (
              <>
                <FiTrash />
                <FiEdit />
                <p
                  className={`chat-bubble chat-bubble-${
                    colors[index % colors.length]
                  }`}
                >
                  {message.text}
                </p>
                <strong>{message.from}</strong>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Messages;
