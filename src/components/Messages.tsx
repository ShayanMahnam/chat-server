import React from "react";

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

  // const getRandomColor = () => {
  //   const randomIndex = Math.floor(Math.random() * colors.length);
  //   return colors[randomIndex];
  // };

  return (
    <div>
      <ul className="flex flex-col justify-center items-center">
        {messages.map((message, index) => (
          <li
            className="chat chat-start flex justify-center items-center"
            key={message.id}
          >
            <strong>{message.from}:</strong>
            <p
              className={`chat-bubble chat-bubble-${
                colors[index % colors.length]
              }`}
            >
              {message.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Messages;
