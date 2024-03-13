import React, { useContext } from "react";
import usePdf from "../hooks/usePdf";
import PlanContext from "../context/PlanContext";
import { FaRegFilePdf, FaTrashAlt } from "react-icons/fa";

const ActionsButton = ({ plan, setIsOpen, isOpen }) => {
  const { generatePDF } = usePdf();
  const { deletePlan } = useContext(PlanContext);

  const handleGeneratePDF = async (event) => {
    try {
      event.stopPropagation();

      const planData = {
        title: plan.title,
        description: plan.description,
        startDate: plan.startDate,
        endDate: plan.endDate,
      };

      const pdfBlob = await generatePDF(planData);

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
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="block w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100"
        onClick={handleDeleteCard}
        type="button"
      >
        <FaTrashAlt />
      </button>
      <button
        className="block w-full px-4 py-2 text-left hover:bg-gray-100"
        onClick={handleGeneratePDF}
        type="button"
      >
        <FaRegFilePdf />
      </button>
    </>
  );
};

export default ActionsButton;
