import { PDFReport, ExcelReport } from "./reports";

console.log("=== Template Method Pattern ===\n");

console.log("Generating PDF Report:");
const pdfReport = new PDFReport();
pdfReport.generate();

console.log("\nGenerating Excel Report:");
const excelReport = new ExcelReport();
excelReport.generate();

