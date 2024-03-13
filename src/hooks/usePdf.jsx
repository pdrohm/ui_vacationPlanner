import { useState } from "react";
import jsPDF from "jspdf";

const usePdf = () => {
  const generatePDF = async (plan) => {
    try {
      const doc = new jsPDF();

      doc.setFontSize(20);
      doc.text("Vacation Plan", 105, 15, { align: "center" });

      doc.setFontSize(14);
      doc.text("Title:", 10, 30);
      doc.text(plan.title, 40, 30);

      doc.text("Description:", 10, 40);
      doc.text(plan.description || "No description provided", 40, 40);

      doc.text("Start Date:", 10, 50);
      doc.text(plan.startDate, 40, 50);

      doc.text("End Date:", 10, 60);
      doc.text(plan.endDate, 40, 60);

      // Adicione mais informações do plano aqui...

      // Retornar o PDF como um blob
      return doc.output("blob");
    } catch (error) {
      console.error("Error generating PDF:", error);
      throw error;
    }
  };

  return { generatePDF };
};

export default usePdf;
