import { ShoppingCart } from "./ShoppingCart"

export class ExternalCartClient {
  public formattedTotalPrice(price: number): string {
    const shoppingCart = new ShoppingCart()
    shoppingCart.add(price)

    return `Total price is ${shoppingCart.calculateTotalPrice()} euro`
  }
}
