import { Invoice } from "./Invoice"

export class InvoiceService {
  public calculateNetAmount(amount: string, tax: string): string {
    const invoice = new Invoice()
    invoice.grossAmount = Number(amount)
    invoice.taxPercentage = Number(tax)

    return (
      invoice.grossAmount - (
        invoice.grossAmount * (
          invoice.taxPercentage / Number("100")
        )
      )
    ).toString()
  }
}
