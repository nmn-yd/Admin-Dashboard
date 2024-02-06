import PanelHeader from "../../UI/PanelHeader";

// Array of chat messages
const messages = [
  {
    text: "Hello World!",
    sender: "You",
    profilePic: "user2.jpg",
    timestamp: "9:30 AM",
  },
  {
    text: "Love it! :heart:",
    sender: "friend",
    profilePic: "user1.jpg",
    timestamp: "9:32 AM",
  },
  {
    text: "Check out my Github at https://github.com/WigoHunter",
    sender: "You",
    profilePic: "user2.jpg",
    timestamp: "9:35 AM",
  },
  {
    text: "Lorem ipsum dolor sit amet, nibh ipsum. Cum class sem inceptos incidunt sed sed. Tempus wisi enim id, arcu sed lectus aliquam, nulla vitae est bibendum molestie elit risus.",
    sender: "friend",
    profilePic: "user1.jpg",
    timestamp: "10:00 AM",
  },
  {
    text: "So Chilltime is going to be an app for you to view videos with friends. You can sign-up now to try out our private beta!",
    sender: "You",
    profilePic: "user2.jpg",
    timestamp: "10:05 AM",
  },
  {
    text: "Definitely! Sounds great!",
    sender: "Friend",
    profilePic: "user1.jpg",
    timestamp: "10:10 AM",
  },
];

function ChatPanel() {
  return (
    <div className="max-h-[748px] flex-1 rounded-md border-blue-700 bg-[#ffffff] p-6 shadow-md">
      <PanelHeader
        heading="Chat"
        content="message your friends
"
      />
      <div className=" px-4 py-6">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.sender === "You" ? "justify-end" : "justify-start"} mb-4`}
          >
            <div className="flex items-end">
              {message.sender !== "you" && (
                <img
                  src={message.profilePic}
                  alt={message.sender}
                  className="mr-2 h-8 w-8 rounded-full"
                />
              )}
              <div
                className={`max-w-xs break-words rounded-lg bg-gray-200 p-2 ${message.sender === "you" ? "bg-blue-500 text-white" : ""}`}
              >
                <p className="text-sm">{message.text}</p>
                <p className="text-xs text-gray-600">{message.timestamp}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 rounded-l-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />
        <button className="rounded-r-md bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatPanel;
