// Importing React and useState hook
import React, { useState } from "react";

// Interface for a new message
interface NewMessage {
  from: string;
  text: string;
}

// Interface for the props received by Header component
interface Props {
  addMessage: (message: NewMessage) => void;
}

// Header component definition
function Header({ addMessage }: Props) {
  // State for the new message
  const [newMessage, setNewMessage] = useState<NewMessage>({
    from: "",
    text: "",
  });

  // Handler function to update the new message state when input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "from") {
      // Capitalize the first letter and trim any leading/trailing spaces/limit the characters to 20
      const trimmedValue = value.trimStart().slice(0, 20);
      const capitalizedValue =
        trimmedValue.charAt(0).toUpperCase() + trimmedValue.slice(1);
      setNewMessage((prevMessage) => ({
        ...prevMessage,
        [name]: capitalizedValue,
      }));
    } else if (name === "text") {
      // Trim any leading/trailing spaces/limit the characters to 100
      const trimmedValue = value.trimStart().slice(0, 100);
      setNewMessage((prevMessage) => ({
        ...prevMessage,
        [name]: trimmedValue,
      }));
    } else {
      setNewMessage((prevMessage) => ({
        ...prevMessage,
        [name]: value,
      }));
    }
  };

  // Handler function to submit the new message
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message: NewMessage = { ...newMessage };
    addMessage(message);
    setNewMessage({ from: "", text: "" });
  };

  return (
    <header className="flex flex-col justify-center text-center gap-4 flex-nowrap">
      <h1 className="font-bold text-2xl md:text-3xl dark:text-white">
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
