interface IDoor {
  getwidth: () => number;
  getheight: () => number;
}

class WoodenDoor implements IDoor {
  protected width = 0
  protected height = 0
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

export class DoorFactory {
  static makeDoor(width: number, height: number): IDoor {
    return new WoodenDoor(width, height);
  }
}