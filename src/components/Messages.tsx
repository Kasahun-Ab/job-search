import React, { useState } from "react";
import { Search, MoreVertical, Send } from "lucide-react";

const contacts = [
  {
    id: 1,
    name: "Sarah Wilson",
    role: "Product Designer at Slack",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop&crop=faces",
    lastMessage: "Hi Andre! Are you available for a quick chat?",
    time: "2m ago",
    unread: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Senior UI Designer at Airbnb",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=faces",
    lastMessage: "Thanks for your application! We d love to...",
    time: "1h ago",
    unread: false,
  },
];

export function Messages() {
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [message, setMessage] = useState("");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg min-h-[calc(100vh-8rem)] flex">
        {/* Contact List */}
        <div className="w-80 border-r border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search messages"
              />
            </div>
          </div>
          <div className="overflow-y-auto h-[calc(100vh-12rem)]">
            {contacts.map((contact) => (
              <button
                key={contact.id}
                className={`w-full p-4 text-left hover:bg-gray-50 focus:outline-none ${
                  selectedContact.id === contact.id ? "bg-blue-50" : ""
                }`}
                onClick={() => setSelectedContact(contact)}
              >
                <div className="flex items-start">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={contact.avatar}
                    alt=""
                  />
                  <div className="ml-3 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">
                        {contact.name}
                      </p>
                      <p className="text-xs text-gray-500">{contact.time}</p>
                    </div>
                    <p className="text-xs text-gray-500">{contact.role}</p>
                    <p className="mt-1 text-sm text-gray-600 truncate">
                      {contact.lastMessage}
                    </p>
                  </div>
                  {contact.unread && (
                    <div className="ml-2 h-2 w-2 bg-blue-600 rounded-full"></div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center">
              <img
                className="h-10 w-10 rounded-full"
                src={selectedContact.avatar}
                alt=""
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  {selectedContact.name}
                </p>
                <p className="text-xs text-gray-500">{selectedContact.role}</p>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <MoreVertical className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            {/* Sample messages - you can replace with real messages */}
            <div className="space-y-4">
              <div className="flex justify-end">
                <div className="bg-blue-600 text-white rounded-lg px-4 py-2 max-w-sm">
                  Hi Sarah! Thanks for reaching out.
                </div>
              </div>
              <div className="flex">
                <img
                  className="h-8 w-8 rounded-full"
                  src={selectedContact.avatar}
                  alt=""
                />
                <div className="ml-2 bg-gray-100 rounded-lg px-4 py-2 max-w-sm">
                  {selectedContact.lastMessage}
                </div>
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <input
                type="text"
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button className="ml-4 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
