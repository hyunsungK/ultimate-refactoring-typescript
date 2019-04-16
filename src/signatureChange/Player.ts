import { Role } from "./Role"

export class Player {
  private name: string
  private score: number
  private role: Role

  public constructor(role: Role, name: string, score: number = 0) {
    this.role = role
    this.name = name
    this.score = score
  }

  public play(): void {
    if (this.role === Role.Dragon) {
      this.score += 20
    } else {
      this.score = this.score - 10
    }
  }

  public getScore(): number {
    return this.score
  }
}
