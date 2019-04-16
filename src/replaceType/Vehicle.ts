export class Vehicle {
  public brand: string
  public description: string
  public color: string
  public soldDate: Date

  public constructor(brand: string, description: string) {
    this.brand = brand
    this.description = description
    // @ts-ignore
    this.color = null // simulate Java behavior
    // @ts-ignore
    this.soldDate = null // simulate Java behavior
  }
}
