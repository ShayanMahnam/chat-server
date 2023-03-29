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
    <header className="flex flex-col justify-center text-center gap-4 flex-nowrap">
      <h1 className="font-bold text-2xl md:text-3xl">
        Shayan Mini Chat Server
      </h1>
      <div>
        <form
          className="flex flex-col md:flex-row justify-center items-center gap-3"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="from"
            placeholder="Your Name"
            required
            value={newMessage.from}
            onChange={handleInputChange}
            className="border border-gray-400 rounded px-4 py-2 mr-4 w-10/12 md:w-auto"
          />
          <input
            type="text"
            name="text"
            placeholder="Your Message"
            required
            value={newMessage.text}
            onChange={handleInputChange}
            className="border border-gray-400 rounded px-4 py-2 mr-4 w-10/12 md:w-auto"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Send
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
