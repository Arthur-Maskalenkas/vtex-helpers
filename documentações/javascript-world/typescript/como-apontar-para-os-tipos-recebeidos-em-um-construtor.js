class Person {
  constructor(public name: string, public age: number, public country: string) {
    this.name = name;
    this.age = age;
    this.country = country;
  }
}

// 👇️ type PersonParamsType = [name: string, age: number, country: string]
type PersonParamsType = ConstructorParameters<typeof Person>;

// 👇️ type First = string
type First = PersonParamsType[0];

// 👇️ type Second = number
type Second = PersonParamsType[1];