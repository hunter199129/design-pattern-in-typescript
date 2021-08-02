// visitee
interface IAnimal {
  accept(operation: IAnimalOperation): void;
}
// visitor
interface IAnimalOperation {
  visitMonkey(monkey: Monkey): void;
  visitLion(lion: Lion): void;
  visitDolphin(dolphin: Dolphin): void;
}

export class Monkey implements IAnimal {
  shout = () => {
    console.log('Ooh oo aa aa!');
  };
  accept(operation: IAnimalOperation) {
    operation.visitMonkey(this);
  }
}

export class Lion implements IAnimal {
  roar = () => {
    console.log('Roaaar!');
  };
  accept(operation: IAnimalOperation) {
    operation.visitLion(this);
  }
}

export class Dolphin implements IAnimal {
  speak = () => {
    console.log('Tuut tuttu tuutt!');
  };
  accept(operation: IAnimalOperation) {
    operation.visitDolphin(this);
  }
}

export class Speak implements IAnimalOperation {
  visitMonkey(monkey: Monkey) {
    monkey.shout();
  }
  visitLion(lion: Lion) {
    lion.roar();
  }
  visitDolphin(dolphin: Dolphin) {
    dolphin.speak();
  }
}

export class Jump implements IAnimalOperation {
  visitMonkey(monkey: Monkey) {
    console.log('Jumped 20 feet high! on to the tree!');
  }
  visitLion(lion: Lion) {
    console.log('Jumped 7 feet! Back on the ground!');
  }
  visitDolphin(dolphin: Dolphin) {
    console.log('Walked on water a little and disappeared');
  }
}
