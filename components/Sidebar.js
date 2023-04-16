import React from "react";
import { useState } from "react";
import Hamburger from "hamburger-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Hamburger toggled={isOpen} toggle={setIsOpen} color="#FFF" />
      <div
        className={`top-16 right-0 fixed bg-black w-[35vw] h-full p-10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-300`}
      >
        <h2 className="text-2xl text-white">Sidebar Menu</h2>
      </div>
    </>
  );
}
