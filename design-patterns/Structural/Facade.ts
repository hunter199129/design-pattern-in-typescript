export class Computer {
  getElectricShock() {
    console.log('Ouch!');
  }
  makeSound() {
    console.log('Beep beep!');
  }
  showLoadingScreen() {
    console.log('Loading..');
  }
  bam() {
    console.log('Ready to be used!');
  }
  closeEverything() {
    console.log('Bup bup bup buzzzz!');
  }
  sooth() {
    console.log('Zzzzz');
  }
  pullCurrent() {
    console.log('Haaah!');
  }
}

export class ComputerFacade {
  protected computer: Computer;

  constructor(computer: Computer) {
    this.computer = computer;
  }

  turnOn() {
    this.computer.getElectricShock();
    this.computer.makeSound();
    this.computer.showLoadingScreen();
    this.computer.bam();
  }
  turnOff() {
    this.computer.closeEverything();
    this.computer.pullCurrent();
    this.computer.sooth();
  }
}
