interface ILion {
  roar(): void
}

class AfricanLion implements ILion {
  roar = () => { }
}

class AsianLion implements ILion {
  roar = () => { }
}

class Hunter {
  hunt = (lion: ILion) => {
    console.log(lion)
  }
}

class WildDog {
  bark = () => { }
}

class WildDogAdapter implements ILion {
  _dog: WildDog

  constructor(dog: WildDog) {
    this._dog = dog
  }

  roar = () => {
    this._dog.bark()
  }
}

export default function AdapterSample() {
  let wildDog = new WildDog()
  let wildDogAdapter = new WildDogAdapter(wildDog)

  let hunter = new Hunter()
  hunter.hunt(wildDogAdapter)
}