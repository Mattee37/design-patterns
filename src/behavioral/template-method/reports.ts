import { ReportGenerator } from "./types";

export class PDFReport extends ReportGenerator {
  protected fetchData(): void {
    console.log("   Fetching data from database...");
  }

  protected processData(): void {
    console.log("   Processing data for PDF...");
  }

  protected export(): void {
    console.log("   Exporting as PDF 📄");
  }
}

export class ExcelReport extends ReportGenerator {
  protected fetchData(): void {
    console.log("   Fetching data from API...");
  }

  protected processData(): void {
    console.log("   Processing data for Excel...");
  }

  protected override formatReport(): void {
    console.log("   Formatting with Excel styles...");
  }

  protected export(): void {
    console.log("   Exporting as Excel 📊");
  }
}

