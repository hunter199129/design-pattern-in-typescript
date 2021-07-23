interface IDoor {
  getwidth: () => number;
  getheight: () => number;
}

class WoodenDoor implements IDoor {
  width = 0
  height = 0
  constructor(width: number, height: number) {
    this.width = width
    this.height = height
  }
  getwidth = () => {
    return this.width
  }
  getheight = () => {
    return this.height
  }
}

class DoorFactory {
  static makeDoor(width: number, height: number): IDoor {
    return new WoodenDoor(width, height);
  }
}

export default function simpleFactorySample() {
  const door = DoorFactory.makeDoor(100, 200)
  console.log(`Width: ${door.getwidth()}`)
  console.log(`Height: ${door.getheight()}`)
}