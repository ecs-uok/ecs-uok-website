import React from "react";
import AboutECSSection from "../components/AboutECSSection";
import MessagesSection from "../components/MessagesSection";
import LeadershipSection from "../components/LeadershipSection";
import NewsSection from "../components/NewsSection";
import EventsSection from "../components/EventsSection";
import { useState } from "react";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("about");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const contentComponents = {
    about: <AboutECSSection />,
    messages: <MessagesSection />,
    leadership: <LeadershipSection />,
    news: <NewsSection />,
    events: <EventsSection />,
  };

  const icons = {
    about: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 320 512"
        className="w-6 h-6 fill-current"
      >
        <path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
      </svg>
    ),
    messages: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
        className="w-6 h-6 fill-current"
      >
        <path d="M168.2 384.9c-15-5.4-31.7-3.1-44.6 6.4c-8.2 6-22.3 14.8-39.4 22.7c5.6-14.7 9.9-31.3 11.3-49.4c1-12.9-3.3-25.7-11.8-35.5C60.4 302.8 48 272 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-31.6 0-61.3-5.5-87.8-15.1zM26.3 423.8c-1.6 2.7-3.3 5.4-5.1 8.1l-.3 .5c-1.6 2.3-3.2 4.6-4.8 6.9c-3.5 4.7-7.3 9.3-11.3 13.5c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c5.1 0 10.2-.3 15.3-.8l.7-.1c4.4-.5 8.8-1.1 13.2-1.9c.8-.1 1.6-.3 2.4-.5c17.8-3.5 34.9-9.5 50.1-16.1c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9zM144 272a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm144-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm80 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
      </svg>
    ),
    leadership: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 640 512"
        className="w-6 h-6 fill-current"
      >
        <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
      </svg>
    ),
    news: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
        className="w-6 h-6 fill-current"
      >
        <path d="M168 80c-13.3 0-24 10.7-24 24V408c0 8.4-1.4 16.5-4.1 24H440c13.3 0 24-10.7 24-24V104c0-13.3-10.7-24-24-24H168zM72 480c-39.8 0-72-32.2-72-72V112C0 98.7 10.7 88 24 88s24 10.7 24 24V408c0 13.3 10.7 24 24 24s24-10.7 24-24V104c0-39.8 32.2-72 72-72H440c39.8 0 72 32.2 72 72V408c0 39.8-32.2 72-72 72H72zM176 136c0-13.3 10.7-24 24-24h96c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24H200c-13.3 0-24-10.7-24-24V136zm200-24h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24zM200 272H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
      </svg>
    ),
    events: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 448 512"
        className="w-6 h-6 fill-current"
      >
        <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
      </svg>
    ),
  };

  return (
    <div className="flex bg-white">
      <div>
        <div className="flex gap-4 items-center justify-center text-4xl font-bold capitalize text-white bg-primary w-full h-[200px]">
          {React.cloneElement(icons[activeSection], {
            className: "w-10 h-10 fill-current",
          })}
          {activeSection}
        </div>
        <div className="font-bold text-xl cursor-pointer mx-12 mt-12 mb-20">
          {/* about ecs sidemenu item */}
          <div
            className={`flex gap-4 py-6 px-10 hover:text-secondary hover:translate-x-4 duration-500 ${
              activeSection === "about" ? "text-primary translate-x-4" : ""
            }`}
            onClick={() => handleSectionClick("about")}
          >
            {icons["about"]}
            About ECS
          </div>
          <hr />

          {/* messages sidemenu item */}
          <div
            className={`flex gap-4 py-6 px-10 hover:text-secondary hover:translate-x-4 duration-500 ${
              activeSection === "messages" ? "text-primary translate-x-4" : ""
            }`}
            onClick={() => handleSectionClick("messages")}
          >
            {icons["messages"]}
            Messages
          </div>
          <hr />

          {/* leadership sidemenu item */}
          <div
            className={`flex gap-4 py-6 px-10 hover:text-secondary hover:translate-x-4 duration-500 ${
              activeSection === "leadership" ? "text-primary translate-x-4" : ""
            }`}
            onClick={() => handleSectionClick("leadership")}
          >
            {icons["leadership"]}
            Leadership
          </div>
          <hr />

          {/* news sidemenu item */}
          <div
            className={`flex gap-4 py-6 px-10 hover:text-secondary hover:translate-x-4 duration-500 ${
              activeSection === "news" ? "text-primary translate-x-4" : ""
            }`}
            onClick={() => handleSectionClick("news")}
          >
            {icons["news"]}
            News
          </div>
          <hr />

          {/* events sidemenu item */}
          <div
            className={`flex gap-4 py-6 px-10 hover:text-secondary hover:translate-x-4 duration-500 ${
              activeSection === "events" ? "text-primary translate-x-4" : ""
            }`}
            onClick={() => handleSectionClick("events")}
          >
            {icons["events"]}
            Events
          </div>
          <hr />
        </div>
      </div>

      <div className="">{contentComponents[activeSection]}</div>
    </div>
  );
}
