import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import { FaDownload } from "react-icons/fa";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfViewerPage = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const location = useLocation();
  const { pdf } = location.state || {};

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gray-500 px-40 py-10">
      <div className="mb-4 flex w-full justify-end">
        <a href={pdf} download={``}>
          <FaDownload className="text-white hover:text-primary" size={24} />
        </a>
      </div>
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          pageNumber={pageNumber}
          renderAnnotationLayer={false}
          renderTextLayer={false}
        />
      </Document>
    </div>
  );
};
export default PdfViewerPage;
