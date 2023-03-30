import React, { useState } from "react";
import { FiTrash, FiEdit } from "react-icons/fi";

interface Message {
  id: number;
  from: string;
  text: string;
}

interface Props {
  messages: Message[];
  onDeleteMessage: (id: number) => void;
  onUpdateMessage: (id: number, updatedMessage: Message) => void;
}

function Messages({ messages, onDeleteMessage, onUpdateMessage }: Props) {
  // const handleAlert = () => {
  //   alert("update messages will be new feature in future")
  // }
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

  // state to keep track of the message being edited
  const [editingMessageId, setEditingMessageId] = useState<number | null>(null);
  const [editedMessageText, setEditedMessageText] = useState("");

  const handleEditClick = (messageId: number, messageText: string) => {
    // set the editing message id and text to the clicked message
    setEditingMessageId(messageId);
    setEditedMessageText(messageText);
  };

  const handleCancelEdit = () => {
    // reset the editing message id and text
    setEditingMessageId(null);
    setEditedMessageText("");
  };

  const handleSaveEdit = () => {
    if (editingMessageId === null) {
      return;
    }

    onUpdateMessage(editingMessageId, {
      id: editingMessageId,
      from: messages.find((m) => m.id === editingMessageId)?.from || "",
      text: editedMessageText,
    });
    // reset the editing message id and text
    setEditingMessageId(null);
    setEditedMessageText("");
  };

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
                {editingMessageId === message.id ? (
                  // show the input field when the message is being edited
                  <input
                    type="text"
                    className="border-2 border-gray-300 p-1 rounded-md w-full"
                    value={editedMessageText}
                    onChange={(e) => setEditedMessageText(e.target.value)}
                  />
                ) : (
                  <p
                    className={`chat-bubble chat-bubble-${
                      colors[index % colors.length]
                    } dark:text-white`}
                  >
                    {message.text}
                  </p>
                )}
                <div className="flex flex-col md:flex-row gap-1">
                  {editingMessageId === message.id ? (
                    // show the save and cancel buttons when the message is being edited
                    <>
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-md"
                        onClick={handleSaveEdit}
                      >
                        Save
                      </button>
                      <button
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded-md"
                        onClick={handleCancelEdit}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <FiEdit
                        className="cursor-pointer dark:text-black"
                        onClick={() =>
                          handleEditClick(message.id, message.text)
                        }
                      />
                      <FiTrash
                        className="cursor-pointer dark:text-black"
                        onClick={() => onDeleteMessage(message.id)}
                      />
                    </>
                  )}
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
                  {editingMessageId === message.id ? (
                    // show the save and cancel buttons when the message is being edited
                    <>
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-md"
                        onClick={handleSaveEdit}
                      >
                        Save
                      </button>
                      <button
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded-md"
                        onClick={handleCancelEdit}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <FiTrash
                        className="cursor-pointer dark:text-black"
                        onClick={() => onDeleteMessage(message.id)}
                      />
                      <FiEdit
                        className="cursor-pointer dark:text-black"
                        onClick={() =>
                          handleEditClick(message.id, message.text)
                        }
                      />
                    </>
                  )}
                </div>
                {editingMessageId === message.id ? (
                  // show the input field when the message is being edited
                  <input
                    type="text"
                    className="border-2 border-gray-300 p-1 rounded-md w-full"
                    value={editedMessageText}
                    onChange={(e) => setEditedMessageText(e.target.value)}
                  />
                ) : (
                  <p
                    className={`chat-bubble chat-bubble-${
                      colors[index % colors.length]
                    } dark:text-white`}
                  >
                    {message.text}
                  </p>
                )}

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
