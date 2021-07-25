export class Burger {
  protected size: number;

  protected cheese = false;
  protected pepperoni = false;
  protected lettuce = false;
  protected tomato = false;

  constructor(builder: BurgerBuilder) {
    this.size = builder.size;
    this.cheese = builder.cheese;
    this.pepperoni = builder.pepperoni;
    this.lettuce = builder.lettuce;
    this.tomato = builder.tomato;
  }
  getState = () => ({
    size: this.size,
    cheese: this.cheese,
    pepperoni: this.pepperoni,
    lettuce: this.lettuce,
    tomato: this.tomato,
  });
}

export class BurgerBuilder {
  size: number;

  cheese = false;
  pepperoni = false;
  lettuce = false;
  tomato = false;

  constructor(size: number) {
    this.size = size;
  }

  addCheese = () => {
    this.cheese = true;
    return this;
  };
  addPepperoni = () => {
    this.pepperoni = true;
    return this;
  };
  addLettuce = () => {
    this.lettuce = true;
    return this;
  };
  addTomato = () => {
    this.tomato = true;
    return this;
  };

  build = (): Burger => {
    return new Burger(this);
  };
}
