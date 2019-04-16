import { God } from "../src/moveResponsibility/God"

describe("God", () => {
  it("adds numbers", () => {
    const god = new God()
    expect(god.add(2, 2)).toEqual(4)
  })
  it("subtracts numbers", () => {
    const god = new God()
    expect(god.substract(2, 2)).toEqual(0)
  })
})
