import { AuthenticationService } from "../src/signatureChange/AuthenticationService"

describe("Authentication Service", () => {
  it("distinguish administrator role", () => {
    const service = new AuthenticationService()
    const adminId = 12345
    expect(service.isAuthenticated(adminId)).toEqual(true)
  })
  it("distinguish non admin role", () => {
    const service = new AuthenticationService()
    const normalUserId = 11111
    expect(service.isAuthenticated(normalUserId)).toEqual(false)
  })
})
