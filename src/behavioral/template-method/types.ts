export abstract class ReportGenerator {
  generate(): void {
    this.fetchData();
    this.processData();
    this.formatReport();
    this.export();
  }

  protected abstract fetchData(): void;
  protected abstract processData(): void;

  protected formatReport(): void {
    console.log("   Formatting report...");
  }

  protected abstract export(): void;
}

