import { ShoppingCart } from "../src/implementationChange/ShoppingCart"

describe("ShoppingCart", () => {
  it("counts the number of products", () => {
    const shoppingCart = new ShoppingCart()
    shoppingCart.add(10)

    expect(shoppingCart.numberOfProducts()).toEqual(1)
  })
  it("calculates the total price", () => {
    const shoppingCart = new ShoppingCart()
    shoppingCart.add(10)

    expect(shoppingCart.calculateTotalPrice()).toEqual(10)
  })
  it("knows when the discount applicable", () => {
    const shoppingCart = new ShoppingCart()
    shoppingCart.add(100)

    expect(shoppingCart.hasDiscount()).toBe(true)
  })
  it("knows when is not possible to apply discount", () => {
    const shoppingCart = new ShoppingCart()
    shoppingCart.add(99)

    expect(shoppingCart.hasDiscount()).toBe(false)
  })
})
