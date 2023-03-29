import React, { useState } from "react";

interface NewMessage {
  from: string;
  text: string;
}

interface Props {
  addMessage: (message: NewMessage) => void;
}

function Header({ addMessage }: Props) {
  const [newMessage, setNewMessage] = useState<NewMessage>({
    from: "",
    text: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewMessage((prevMessage) => ({
      ...prevMessage,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message: NewMessage = { ...newMessage };
    addMessage(message);
    setNewMessage({ from: "", text: "" });
  };

  return (
    <header className="flex flex-col justify-center text-center gap-4">
      <h1 className="font-bold text-3xl">Mini Chat Server</h1>
      <div className="flex justify-center items-center flex-nowrap">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <input
            type="text"
            name="from"
            placeholder="Your Name"
            value={newMessage.from}
            onChange={handleInputChange}
            className="border border-gray-400 rounded px-4 py-2 mb-4 mr-4"
          />
          <input
            type="text"
            name="text"
            placeholder="Your Message"
            value={newMessage.text}
            onChange={handleInputChange}
            className="border border-gray-400 rounded px-4 py-2 mb-4 mr-4"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Send
          </button>
        </form>
      </div>
      <h2>Messages</h2>
    </header>
  );
}

export default Header;
