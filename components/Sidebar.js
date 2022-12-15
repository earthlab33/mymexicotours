import React from "react";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen ? (
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="fixed z-30 flex items-center cursor-pointer right-10 top-3"
            fill="#ffffff"
            viewBox="0 0 100 80"
            width="40"
            height="40"
          >
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        </button>
      ) : (
        <button
          className="text-2xl text-white fixed top-4 right-4 z-10"
          onClick={() => setIsOpen(!isOpen)}
        >
          X
        </button>
      )}
      <div
        className={`top-0 right-0 fixed bg-blue-400 w-[35vw] h-full p-10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-300`}
      >
        <h2 className="text-2xl text-white">Sidebar Menu</h2>
      </div>
    </>
  );
}
