import { ShoppingCart } from "./ShoppingCart"

export class LocalCartClient {
  public static main(args: string[]): void {
    const shoppingCart = new ShoppingCart()
    shoppingCart.add(10)
    console.log("shoppingCart.numberOfProducts() = ", shoppingCart.numberOfProducts());
    console.log("shoppingCart.calculateTotalPrice() = ", shoppingCart.calculateTotalPrice());
    console.log("shoppingCart.hasDiscount() = ", shoppingCart.hasDiscount());
  }
}
