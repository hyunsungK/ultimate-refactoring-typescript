import { SqlVehicleMatcher } from "../src/replaceType/SqlVehicleMatcher";
import { OldVehicleQuery } from "../src/replaceType/OldVehicleQuery";

describe("SqlVehicleMatcher", () => {
  it("finds vehicles", () => {
    const matcher = new SqlVehicleMatcher()
    const query = new OldVehicleQuery()
    query.brandDescription = "VW Polo"

    expect(matcher.countVehicles(query)).toEqual(1)
  })
})
