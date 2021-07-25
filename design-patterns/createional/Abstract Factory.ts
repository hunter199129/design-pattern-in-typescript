interface IDoor {
  getDescription(): void
}

class WoodenDoor implements IDoor {
  getDescription = () => {
    console.log('I am a wooden door')
  }
}

class IronDoor implements IDoor {
  getDescription = () => {
    console.log('I am a iron door')
  }
}

interface IDoorFittingExpert {
  getDescription(): void
}

class Welder implements IDoorFittingExpert {
  getDescription = () => {
    console.log('I can only fit iron doors')
  }
}

class Carpenter implements IDoorFittingExpert {
  getDescription = () => {
    console.log('I can only fit wooden doors')
  }
}

interface IDoorFactory {
  makeDoor(): IDoor
  makeFittingExpert(): IDoorFittingExpert
}

export class WoodenDoorFactory implements IDoorFactory {
  makeDoor = () => {
    return new WoodenDoor()
  }
  makeFittingExpert = () => {
    return new Carpenter()
  }
}

export class IronDoorFactory implements IDoorFactory {
  makeDoor = () => {
    return new IronDoor()
  }
  makeFittingExpert = () => {
    return new Welder()
  }
}