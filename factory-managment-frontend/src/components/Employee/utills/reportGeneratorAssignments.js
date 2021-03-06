import jsPDF from "jspdf";
import "jspdf-autotable";
import { format } from "date-fns";


// define a generatePDF function that accepts a tickets argument
const generatePDF = (tickets) => {
  // initialize jsPDF
  const doc = new jsPDF();

  // define the columns we want and their titles
  //const tableColumn = ["Id", "Title", "Issue", "Status", "Closed on"];
  const tableColumn = [
    "Document ID",
    "Supervisor Name",
    "Description",
    "Status",
  ];
  // define an empty array of rows
  const tableRows = [];

  // for each ticket pass all its data into an array
  tickets.forEach((ticket) => {
    const ticketData = [
      ticket.documentid,
      ticket.supervisor,
      ticket.description,
      ticket.status,
      // called date-fns to format the date on the ticket
      //format(new Date(ticket.date), "yyyy-MM-dd"),
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
  doc.text("Employee Assignments as at 2021-01-01", 14, 15);
  // we define the name of our PDF file.
  doc.save(`Assignments_Report_${dateStr}.pdf`);
};

export default generatePDF;
