export class NewVehicleQuery {
  public brand: string
  public description: string

  public constructor(brand: string, description: string) {
    this.brand = brand
    this.description = description
  }
}
