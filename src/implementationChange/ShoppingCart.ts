export class ShoppingCart {
  private price: number

  constructor() {
    // @ts-ignore
    this.price = null // simulate Java behavior
  }

  public add(price: number): void {
    this.price = price
  }

  public calculateTotalPrice(): number {
    return this.price
  }

  public hasDiscount(): boolean {
    return this.price >= 100
  }

  public numberOfProducts(): number {
    return 1
  }
}
