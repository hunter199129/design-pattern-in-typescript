interface ICoffee {
  getCost(): number;
  getDescription(): string;
}

export class SimpleCoffee implements ICoffee {
  getCost = () => 10;
  getDescription = () => 'Simple coffee';
}

export class MilkCoffee implements ICoffee {
  protected coffee;
  constructor(coffee: ICoffee) {
    this.coffee = coffee;
  }
  getCost = () => this.coffee.getCost() + 2;
  getDescription = () => this.coffee.getDescription() + ', milk'
}

export class WhipCoffee implements ICoffee {
  protected coffee;
  constructor(coffee: ICoffee) {
    this.coffee = coffee;
  }
  getCost = () => this.coffee.getCost() + 5;
  getDescription = () => this.coffee.getDescription() + ', whip'
}

export class VanillaCoffee implements ICoffee {
  protected coffee;
  constructor(coffee: ICoffee) {
    this.coffee = coffee;
  }
  getCost = () => this.coffee.getCost() + 10;
  getDescription = () => this.coffee.getDescription() + ', vanilla'
}
