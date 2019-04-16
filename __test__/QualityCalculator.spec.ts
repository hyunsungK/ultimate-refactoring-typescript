import { Quality } from "../src/replacePrimitiveConstantsWithType/Quality"
import { QualityCalculator } from "../src/replacePrimitiveConstantsWithType/QualityCalculator"

describe("QualityCalculator", () => {
  it("calculates the score", () => {
    const calculator = new QualityCalculator()
    calculator.rateFacilities(Quality.Excellent)
    calculator.rateLocation(Quality.Excellent)

    expect(calculator.getScore()).toEqual(12)
  })
})
