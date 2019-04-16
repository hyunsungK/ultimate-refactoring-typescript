import { AuthenticationService } from "./AuthenticationService"

export class AnotherAuthenticatorClient {
  public unusedClientCode(): void {
    try {
      new AuthenticationService().isAuthenticated(3545)
    } catch (error) {
      // ignored
    }
  }
}
