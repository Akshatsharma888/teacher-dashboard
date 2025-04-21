// ChatSystemSection.js
import { useState } from "react";
import {
  Send,
  Paperclip,
  ChevronLeft,
  Maximize2,
  Minimize2,
} from "lucide-react";
import PropTypes from "prop-types";

const ChatListItem = ({ name, time, onClick }) => (
  <div
    className="flex items-center mt-5 border-b-2 border-zinc-800 cursor-pointer hover:bg-zinc-800/20 transition-colors"
    onClick={onClick}
  >
    <img
      src="/assets/icons/Profile.png"
      alt="Profile"
      className="h-9 ml-5 mb-3"
    />
    <h2 className="w-48 ml-4 text-lg -mt-2 mb-3 truncate">{name}</h2>
    <h4 className="-mt-2 mb-3 ml-auto mr-4">{time}</h4>
    <img
      src="/assets/icons/three-dots.png"
      alt="Menu"
      className="h-8 -mt-2 mb-3 mr-2"
    />
  </div>
);

ChatListItem.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const Message = ({ text, time, sender, isUser }) => (
  <div
    className={`flex items-start gap-4 mb-6 ${
      isUser ? "flex-row-reverse" : "flex-row"
    } mx-4`}
  >
    <img
      src="/assets/icons/Profile.png"
      alt="Profile"
      className="h-8 w-8 rounded-full mt-1"
    />
    <div
      className={`flex flex-col ${
        isUser ? "items-end" : "items-start"
      } max-w-[70%]`}
    >
      <span className="text-sm text-zinc-400 mb-1">{sender}</span>
      <div
        className={`rounded-2xl px-6 py-3 ${
          isUser
            ? "bg-purple-500 text-white rounded-tr-none"
            : "bg-zinc-800 text-white rounded-tl-none"
        }`}
      >
        <p className="leading-relaxed break-words below600:text-[11px]">
          {text}
        </p>
      </div>
      <span className="text-xs text-zinc-500 mt-2">{time}</span>
    </div>
  </div>
);

Message.propTypes = {
  text: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
  isUser: PropTypes.bool.isRequired,
};

const ChatArea = ({ selectedChat, onBack, messages }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleThreeDotsClick = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <div className="flex-1 flex flex-col h-full">
      {/* Profile section with back button */}
      <div className="flex items-center border-b-2 border-zinc-700 p-4">
        <button
          onClick={onBack}
          className="lg:hidden mr-2 p-1 hover:bg-zinc-800 rounded-full transition-colors below600:-ml-6"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <img
          src="/assets/icons/Profile.png"
          alt=""
          className="h-8 below600:-ml-3"
        />
        <div className="ml-4 flex-1">
          <h1 className="text-2xl md:text-3xl font-bold truncate below600:text-[16px]">
            {selectedChat?.name || "John Doe"}
          </h1>
          <h2 className="text-zinc-500">Active now</h2>
        </div>
        <div className="flex items-center gap-4 relative">
          <img
            src="/assets/icons/three-dots.png"
            alt=""
            className="h-8 cursor-pointer"
            onClick={handleThreeDotsClick}
          />
          {showTooltip && (
            <div className="absolute top-10 right-0 bg-zinc-800 text-white p-1 rounded-lg shadow-lg z-10">
              <img
                src="/assets/icons/star.png"
                alt="Favorite"
                className="h-7 mb-3 pl-0.5"
              />
              <img src="/assets/icons/add.png" alt="Add" className="h-8 mb-2" />
              <img src="/assets/icons/phone.png" alt="Call" className="h-9" />
            </div>
          )}
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto hide-scroll">
        {messages.map((message, index) => (
          <Message
            key={index}
            text={message.text}
            time={message.time}
            sender={message.sender}
            isUser={message.isUser}
          />
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-zinc-700 below600:-ml-4">
        <div className="flex items-center gap-3">
          <div className="flex-1 flex items-center gap-2 bg-zinc-800 rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="Type a message"
              className="flex-1 bg-transparent border-none focus:outline-none text-white placeholder-zinc-500"
            />
            <button className="p-1 hover:bg-zinc-700 rounded-full transition-colors">
              <Paperclip className="h-5 w-5 text-zinc-400" />
            </button>
          </div>
          <button className="p-3 bg-pink-500 rounded-full hover:bg-pink-600 transition-colors">
            <Send className="h-5 w-5 text-white below600:h-3 below600:w-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

ChatArea.propTypes = {
  selectedChat: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    time: PropTypes.string,
  }),
  onBack: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      isUser: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

const ChatSystemSection = ({ onFullScreenChange }) => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const chatUsers = [
    { id: 1, name: "Emily Johnson", time: "Now" },
    { id: 2, name: "Michael Chen", time: "Now" },
    { id: 3, name: "Sarah Williams", time: "Now" },
    { id: 4, name: "David Rodriguez", time: "Now" },
    { id: 5, name: "Priya Patel", time: "Now" },
    { id: 6, name: "James Wilson", time: "Now" },
    { id: 7, name: "Sophia Kim", time: "Now" },
    { id: 8, name: "John Doe", time: "Now" },
    { id: 9, name: "Alex Thompson", time: "Now" },
    { id: 10, name: "Maria Garcia", time: "Now" },
  ];

  const [messages] = useState([
    {
      sender: "John Doe",
      text: "Hey!",
      time: "11:12 pm",
      isUser: true,
    },
    {
      sender: "John Doe",
      text: "Hi, how are you doing? I was wondering if you can share the documents with me by today itself.",
      time: "11:13 pm",
      isUser: true,
    },
    {
      sender: "Shikha Gupta",
      text: "I am doing great. How are you doing?",
      time: "11:14 pm",
      isUser: false,
    },
    {
      sender: "Shikha Gupta",
      text: "Please give me sometime.",
      time: "11:14 pm",
      isUser: false,
    },
    {
      sender: "Shikha Gupta",
      text: "As I am already working on that document.",
      time: "11:15 pm",
      isUser: false,
    },
  ]);

  const handleChatSelect = (user) => {
    setSelectedChat(user);
    setIsMobileView(true);
  };

  const handleBack = () => {
    setIsMobileView(false);
    setSelectedChat(null);
  };

  const toggleFullScreen = () => {
    const newFullScreenState = !isFullScreen;
    setIsFullScreen(newFullScreenState);
    onFullScreenChange?.(newFullScreenState);
  };

  return (
    <section
      className={`min-h-[700px] text-zinc-700 dark:text-zinc-300 -ml-6 relative ${
        isFullScreen
          ? "fixed inset-0 z-[70] ml-0 bg-white dark:bg-zinc-900"
          : ""
      }`}
    >
      <div
        className={`w-full ${
          isFullScreen ? "h-screen" : "max-w-[1400px]"
        } ml-0`}
      >
        {/* // ...existing code... */}
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleFullScreen}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
          >
            {isFullScreen ? (
              <>
                <Minimize2 className="h-5 w-5" />
                <span>Exit Full Screen</span>
              </>
            ) : (
              <>
                <Maximize2 className="h-5 w-5" />
                <span>Full Screen</span>
              </>
            )}
          </button>
        </div>
        {/* // ...existing code... */}

        <div
          className={`relative flex ${
            isFullScreen ? "h-[calc(100vh-80px)]" : "h-[690px]"
          } border border-zinc-800 rounded-lg overflow-hidden`}
        >
          {/* Chat List Section */}
          <div
            className={`
            w-full lg:w-[450px]
            h-full
            bg-white dark:bg-zinc-900
            border-r border-zinc-800
            ${isMobileView ? "hidden lg:block" : "block"}
          `}
          >
            {/* Header */}
            <div className="flex items-center mt-5 px-5">
              <img
                src="/assets/icons/Profile.png"
                alt="Profile"
                className="h-9"
              />
              <h2 className="w-48 ml-4 text-xl font-semibold truncate">
                {chatUsers[0].name}
              </h2>
              <div className="ml-auto flex items-center">
                <img
                  src="/assets/icons/notification-bell.png"
                  alt="Notifications"
                  className="h-8"
                />
                <img
                  src="/assets/icons/three-dots.png"
                  alt="Menu"
                  className="h-8 ml-2"
                />
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex items-center space-x-4 mt-6 px-4">
              <input
                type="text"
                placeholder="Search"
                className="w-[80%] placeholder-gray-400 border py-1 px-4 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:placeholder-gray-500 dark:focus:ring-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-200 transition-all rounded-full"
              />
              <img src="/assets/icons/add.png" alt="Add" className="h-8" />
            </div>

            {/* Active Now Section */}
            <div className="flex border-b-2 border-zinc-800 mt-4">
              <h3 className="py-3 text-zinc-500 dark:text-zinc-400 font-semibold hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors cursor-pointer ml-10 relative group">
                Active Now
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </h3>
            </div>

            {/* Chat List with Scroll */}
            <div className="overflow-y-auto h-[calc(100%-200px)] hide-scroll">
              {chatUsers.map((user) => (
                <ChatListItem
                  key={user.id}
                  name={user.name}
                  time={user.time}
                  onClick={() => handleChatSelect(user)}
                />
              ))}
            </div>
          </div>

          {/* Chat Area - Desktop */}
          <div className={`hidden lg:flex flex-1`}>
            <ChatArea
              selectedChat={selectedChat}
              onBack={handleBack}
              messages={messages}
            />
          </div>

          {/* Chat Area - Mobile Overlay */}
          <div
            className={`
            absolute inset-0 bg-white dark:bg-zinc-900
            ${isMobileView ? "block" : "hidden"} 
            lg:hidden
          `}
          >
            <ChatArea
              selectedChat={selectedChat}
              onBack={handleBack}
              messages={messages}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

ChatSystemSection.propTypes = {
  onFullScreenChange: PropTypes.func,
};

export default ChatSystemSection;
