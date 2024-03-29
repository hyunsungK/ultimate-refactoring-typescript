import { AuthenticationService } from "./AuthenticationService"

export class AuthenticatorClient {
  private authenticationService: AuthenticationService

  public static main(args: string[]): void {
    new AuthenticatorClient(new AuthenticationService()).run()
  }

  constructor(authenticationService: AuthenticationService) {
    this.authenticationService = authenticationService
  }

  public run(): void {
    const authenticated = this.authenticationService.isAuthenticated(33)
    console.log(`33 is authenticated = ${authenticated}`)
  }
}
