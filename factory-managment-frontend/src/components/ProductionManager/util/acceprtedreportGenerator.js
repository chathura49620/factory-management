import jsPDF from "jspdf";
import "jspdf-autotable";
import { format } from "date-fns";

// define a generatePDF function that accepts a tickets argument
const generateacceptedPDF = (tickets) => {
  // initialize jsPDF
  const doc = new jsPDF();

  // define the columns we want and their titles

  const tableColumn = [
    "Id",
    "Buyer Name",
    "Email",
    "Product Category",
    "Quantity",
    "Payment Methode",
    "Status",
  ];
  // define an empty array of rows
  const tableRows = [];

  // for each ticket pass all its data into an array
  tickets.forEach((ticket) => {
    const ticketData = [
      ticket.orderId,
      ticket.buyerName,
      ticket.email,
      ticket.productCategory,
      ticket.quantity,
      ticket.paymentMethode,
      ticket.status,
      // called date-fns to format the date on the ticket
    ];
    // push each tickcet's info into a row
    tableRows.push(ticketData);
  });

  // startY is basically margin-top
  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  const date = Date().split(" ");
  // we use a date string to generate our filename.
  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
  // ticket title. and margin-top + margin-left
  doc.text("Factory Management System", 5, 5);
  // ticket title. and margin-top + margin-left
  doc.text("Order Details Report", 14, 15);
  // we define the name of our PDF file.
  doc.save(`report_${dateStr}.pdf`);
};

export default generateacceptedPDF;
