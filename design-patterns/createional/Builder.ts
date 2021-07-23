class Burger {
  _size: number

  _cheese = false
  _pepperoni = false
  _lettuce = false
  _tomato = false

  constructor(builder: BurgerBuilder) {
    this._size = builder.size
    this._cheese = builder.cheese
    this._pepperoni = builder.pepperoni
    this._lettuce = builder.lettuce
    this._tomato = builder.tomato
  }
}

class BurgerBuilder {
  size: number

  cheese = false
  pepperoni = false
  lettuce = false
  tomato = false

  constructor(size: number) {
    this.size = size
  }

  addCheese = () => {
    this.cheese = true
    return this
  }
  addPepperoni = () => {
    this.pepperoni = true
    return this
  }
  addLettuce = () => {
    this.lettuce = true
    return this
  }
  addTomato = () => {
    this.tomato = true
    return this
  }

  build = (): Burger => {
    return new Burger(this)
  }
}

export default function BuilderSample() {
  let burger = new BurgerBuilder(14)
    .addPepperoni()
    .addLettuce()
    .addTomato()
    .build()

  console.log(burger)
}