import React, { useContext } from "react";
import { FaRegFilePdf } from "react-icons/fa";
import usePdf from "../hooks/usePdf";
import PlanContext from "../context/PlanContext";

const ReportPdfButton = () => {
  const { plans } = useContext(PlanContext);
  const { generatePDFAllPlans } = usePdf();

  const handleGeneratePDF = async (event) => {
    try {
      event.stopPropagation();

      const pdfBlob = await generatePDFAllPlans(plans);

      const pdfUrl = URL.createObjectURL(pdfBlob);

      window.open(pdfUrl, "_blank");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div
      className="fixed bottom-5 right-5"
      title="PRINT A REPORT OF ALL PLANS"
      onClick={handleGeneratePDF}
    >
      <button className="rounded-full  bg-primary p-4 font-bold   text-black hover:bg-blue-700 hover:bg-primary/65">
        <FaRegFilePdf />
      </button>
    </div>
  );
};

export default ReportPdfButton;
