interface ILion {
  roar(): void
}

export class AfricanLion implements ILion {
  roar = () => { }
}

export class AsianLion implements ILion {
  roar = () => { }
}

export class Hunter {
  hunt = (lion: ILion) => {
    lion.roar()
  }
}

export class WildDog {
  bark = () => { }
}

export class WildDogAdapter implements ILion {
  _dog: WildDog

  constructor(dog: WildDog) {
    this._dog = dog
  }

  roar = () => {
    this._dog.bark()
  }
}