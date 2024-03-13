import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import ActionsButton from "./ActionsButton";

const CardFloatingButton = ({ plan }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-40">
      <button
        className="absolute bottom-2 right-2 rounded-full bg-black/80 p-2 font-bold text-white hover:bg-primary"
        onClick={toggleMenu}
      >
        <BsThreeDots />
      </button>

      {isOpen && (
        <div className="absolute -right-2 bottom-12 z-50 rounded-lg border border-gray-200 bg-white p-2 shadow-lg">
          <ActionsButton plan={plan} setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
      )}
    </div>
  );
};

export default CardFloatingButton;
