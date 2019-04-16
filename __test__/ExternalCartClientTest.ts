import { ExternalCartClient } from "../src/implementationChange/ExternalCartClient"

describe("ExternalCartClient", () => {
  it("formats the total price message", () => {
    const client = new ExternalCartClient()

    expect(client.formattedTotalPrice(50)).toEqual("Total price is 50 euro")
  })
})
