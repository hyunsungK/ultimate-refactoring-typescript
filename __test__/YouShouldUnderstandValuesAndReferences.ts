import { SomeType } from "../src/valueAndReference/SomeType"

it("you should understand values and references", () => {
  const instance = new SomeType()

  const arg1 = "bar"
  instance.firstMethod(arg1)
  //expect(arg1).toEqual("???");

  const other = new SomeType()
  other.numbers[0] = 100
  instance.secondMethod(other)
  //expect(other.numbers[0]).toEqual(-1000);
  //expect(other.someField).toEqual("???");

  const another = new SomeType()
  another.numbers[0] = 200
  instance.thirdMethod(another)
  //expect(another.numbers[0]).toEqual(-1000);
  //expect(another.someField).toEqual("???");
  //expect(another.child).toBeNull();

  const yetAnother = new SomeType()
  yetAnother.numbers[0] = 200
  instance.fourthMethod(yetAnother.numbers)
  // expect(yetAnother.numbers[0]).toEqual(-1000);
})
