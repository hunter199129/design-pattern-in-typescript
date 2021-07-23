import { workerData } from "worker_threads"

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

class WoodenDoorFactory implements IDoorFactory {
  makeDoor = () => {
    return new WoodenDoor()
  }
  makeFittingExpert = () => {
    return new Carpenter()
  }
}

class IronDoorFactory implements IDoorFactory {
  makeDoor = () => {
    return new IronDoor()
  }
  makeFittingExpert = () => {
    return new Welder()
  }
}

export default function abstractFactorySample() {
  let woodenFactory = new WoodenDoorFactory()

  let door = woodenFactory.makeDoor()
  let expert = woodenFactory.makeFittingExpert()

  door.getDescription()
  expert.getDescription()

  let ironFactory = new WoodenDoorFactory()

  door = woodenFactory.makeDoor()
  expert = woodenFactory.makeFittingExpert()

  door.getDescription()
  expert.getDescription()

}