import React, { useContext, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa6";
import PlanContext from "../context/PlanContext";
import plainVacationService from "../services/plainVacationService";
import { useNavigate } from "react-router-dom";

const CardFloatingButton = ({ plan }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const { deletePlan } = useContext(PlanContext);

  const toggleMenu = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleGeneratePDF = async (event) => {
    try {
      event.stopPropagation();

      const pdf = await plainVacationService.generatePdfPlan(plan.id, plan);
      console.log(`pdf`, pdf.data);
      navigate(`/pdf`, { state: { pdf: pdf.data } });
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  const handleDeleteCard = (event) => {
    event.stopPropagation();
    deletePlan(plan.id);
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
          <button
            className="block w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100"
            onClick={handleDeleteCard}
          >
            <FaTrashAlt />
          </button>
          <button
            className="block w-full px-4 py-2 text-left hover:bg-gray-100"
            onClick={handleGeneratePDF}
          >
            <FaRegFilePdf />
          </button>
        </div>
      )}
    </div>
  );
};

export default CardFloatingButton;
