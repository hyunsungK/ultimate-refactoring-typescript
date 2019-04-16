import { InvoiceService } from "../src/moveResponsibility/InvoiceService";

describe('Invoice', () => {
    it('calculates net amount', () => {
        const invoiceService = new InvoiceService();

        const result = invoiceService.calculateNetAmount("100", "10");

        expect(result).toEqual("90");
    })
})