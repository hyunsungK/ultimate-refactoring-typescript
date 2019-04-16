import { AuthenticationService } from "../src/signatureChange/AuthenticationService"

describe("AuthenticationService", () => {
  it("distinguishes administrator role", () => {
    const service = new AuthenticationService()
    const adminId = 12345
    expect(service.isAuthenticated(adminId)).toEqual(true)
  })
  it("distinguishes non admin role", () => {
    const service = new AuthenticationService()
    const normalUserId = 11111
    expect(service.isAuthenticated(normalUserId)).toEqual(false)
  })
})
