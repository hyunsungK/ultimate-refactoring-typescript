export class Invoice {
  public grossAmount: number
  public taxPercentage: number
  public numberOfItems: number

  constructor() {
    // @ts-ignore
    this.grossAmount = null // simulate Java behavior
    // @ts-ignore
    this.taxPercentage = null // simulate Java behavior
    // @ts-ignore
    this.numberOfItems = null // simulate Java behavior
  }
}
