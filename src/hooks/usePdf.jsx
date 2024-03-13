import jsPDF from "jspdf";
import "jspdf-autotable";
import { format, parseISO } from "date-fns";

const usePdf = () => {
  const formatDateRange = (startDateString, endDateString) => {
    const startDate = format(parseISO(startDateString), "MMMM dd, yyyy");
    const endDate = format(parseISO(endDateString), "MMMM dd, yyyy");
    return `${startDate} - ${endDate}`;
  };

  const generatePDFAllPlans = async (plans) => {
    try {
      const doc = new jsPDF();
      const tableData = plans.map((plan) => [
        plan.title,
        plan.description || "No description provided",
        formatDateRange(plan.startDate, plan.endDate),
      ]);

      doc.setFontSize(24);
      doc.setTextColor("#38BDF8");
      doc.text("Vacation Planner", 105, 20, {
        align: "center",
      });

      doc.autoTable({
        startY: 40,
        head: [["Title", "Description", "Date"]],
        body: tableData,
        theme: "grid",
        styles: { textColor: "#000", fontStyle: "normal" },
        headStyles: { fillColor: "#f3f3f3" },
      });

      return doc.output("blob");
    } catch (error) {
      console.error("Error generating PDF:", error);
      throw error;
    }
  };

  const generatePDF = async (plan) => {
    try {
      const doc = new jsPDF();
      const planDetails = [
        ["Title", plan.title],
        ["Description", plan.description || "No description provided"],
        ["Date", formatDateRange(plan.startDate, plan.endDate)],
      ];

      doc.setFontSize(24);
      doc.setTextColor("#38BDF8");
      doc.text("Vacation Planner", 105, 20, {
        align: "center",
      });

      doc.autoTable({
        startY: 40,
        body: planDetails,
        theme: "grid",
        styles: { textColor: "#000", fontStyle: "normal" },
        headStyles: { fillColor: "#f3f3f3" },
      });

      return doc.output("blob");
    } catch (error) {
      console.error("Error generating PDF:", error);
      throw error;
    }
  };

  return { generatePDFAllPlans, generatePDF };
};

export default usePdf;
