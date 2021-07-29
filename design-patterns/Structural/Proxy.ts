interface IDoor {
  open(): void;
  close(): void;
}

export class LabDoor {
  open() {
    console.log('Opening lab door');
  }
  close() {
    console.log('Closing the lab door');
  }
}

export class Security {
  protected door: IDoor;

  constructor(door: IDoor) {
    this.door = door;
  }
  open(password: string) {
    if (!this.authentication(password)) {
      console.log("Big no! It ain't possible.");
      return;
    }
    this.door.open();
  }
  authentication(password: string) {
    return password === '$ecr@t';
  }
  close() {
    this.door.close();
  }
}
