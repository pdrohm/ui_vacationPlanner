import React, { useContext } from "react";
import usePdf from "../hooks/usePdf";
import PlanContext from "../context/PlanContext";
import { FaRegFilePdf, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ActionsButton = ({ plan, setIsOpen, isOpen, editScreen }) => {
  const { generatePDF } = usePdf();
  const { deletePlan } = useContext(PlanContext);
  const navigate = useNavigate();

  const handleGeneratePDF = async (event) => {
    try {
      event.stopPropagation();

      const pdfBlob = await generatePDF(plan);

      const pdfUrl = URL.createObjectURL(pdfBlob);

      window.open(pdfUrl, "_blank");
      setIsOpen(!isOpen);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  const handleDeleteCard = (event) => {
    event.stopPropagation();
    deletePlan(plan.id);

    if (setIsOpen) {
      setIsOpen(!isOpen);
    }

    if (editScreen) {
      navigate("/");
    }
  };

  return (
    <>
      <button
        className="flex w-full items-center gap-x-2 px-4 py-2 text-left text-red-600 hover:bg-gray-100"
        onClick={handleDeleteCard}
        type="button"
      >
        <FaTrashAlt /> {editScreen ?? <h1>Delete</h1>}
      </button>
      <button
        className="flex w-full items-center gap-x-2 px-4 py-2 text-left hover:bg-gray-100"
        onClick={handleGeneratePDF}
        type="button"
      >
        <FaRegFilePdf /> {editScreen ?? <h1>open PDF</h1>}
      </button>
    </>
  );
};

export default ActionsButton;
