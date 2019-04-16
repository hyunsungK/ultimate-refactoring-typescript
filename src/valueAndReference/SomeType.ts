export class SomeType {
  public someField: string
  public numbers: number[]
  public child: SomeType

  public constructor() {
    this.numbers = new Array(10).fill(0)
    // @ts-ignore
    this.someField = null // simulate Java behavior
    // @ts-ignore
    this.child = null // simulate Java behavior
  }

  public firstMethod(arg1: string) {
    arg1 = "foo"
  }

  public secondMethod(other: SomeType) {
    other = new SomeType()
    other.someField = "blah"
  }

  public thirdMethod(other: SomeType) {
    other.numbers[0] = 100
    other.someField = "changed"
    other.child = new SomeType()
  }

  public fourthMethod(someNumbers: number[]): void {
    someNumbers[0] = this.numbers[0]
    someNumbers[1] = this.numbers[9]
  }
}
