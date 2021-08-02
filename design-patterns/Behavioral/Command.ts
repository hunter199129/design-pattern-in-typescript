// Receiver
export class Blub {
  turnOn() {
    console.log('Blub has been lit');
  }
  turnOff() {
    console.log('Darkness!');
  }
}
interface ICommand {
  execute(): void;
  undo(): void;
  redo(): void;
}
export class TurnOn implements ICommand {
  protected blub: Blub;
  constructor(blub: Blub) {
    this.blub = blub;
  }
  execute() {
    this.blub.turnOn();
  }
  undo() {
    this.blub.turnOff();
  }
  redo() {
    this.execute();
  }
}
export class TurnOff implements ICommand {
  protected blub: Blub;
  constructor(blub: Blub) {
    this.blub = blub;
  }
  execute() {
    this.blub.turnOff();
  }
  undo() {
    this.blub.turnOn();
  }
  redo() {
    this.execute();
  }
}

// Invoker
export class RemoteControl {
  submit(command: ICommand) {
    command.execute();
  }
}