import {
  AfricanLion,
  AsianLion,
  Hunter,
  WildDog,
  WildDogAdapter,
} from '../design-patterns/structural/Adapter';
import {
  About,
  AquaTheme,
  Careers,
  DarkTheme,
  LightTheme,
} from '../design-patterns/structural/Bridge';
import {
  Developer,
  Designer,
  Organization,
} from '../design-patterns/structural/Composite';
import {
  MilkCoffee,
  SimpleCoffee,
  VanillaCoffee,
  WhipCoffee,
} from '../design-patterns/structural/Decorator';
import { Computer, ComputerFacade } from '../design-patterns/Structural/Facade';
import { TeaMaker, TeaShop } from '../design-patterns/Structural/FlyWeight';
import { Security, LabDoor } from '../design-patterns/Structural/Proxy';

describe('Adapter', () => {
  it('Hunt wild dog through adapter', () => {
    let wildDog = new WildDog();
    let wildDogAdapter = new WildDogAdapter(wildDog);

    wildDog.bark = jest.fn();
    let hunter = new Hunter();
    hunter.hunt(wildDogAdapter);
    expect(wildDog.bark).toHaveBeenCalled();
  });
  it('Hunt Asian lion, not African lion', () => {
    let asianLion = new AsianLion();
    let africanLion = new AfricanLion();

    asianLion.roar = jest.fn();
    africanLion.roar = jest.fn();
    let hunter = new Hunter();
    hunter.hunt(asianLion);
    expect(asianLion.roar).toHaveBeenCalled();
    expect(africanLion.roar).not.toHaveBeenCalled();
  });
});

describe('Bridge', () => {
  it('Pages in different themes', () => {
    const darkTheme = new DarkTheme();
    let about = new About(darkTheme);
    let careers = new Careers(darkTheme);
    expect(about.getContent()).toBe('About page in dark black');
    expect(careers.getContent()).toBe('Careers page in dark black');

    const lightTheme = new LightTheme();
    about = new About(lightTheme);
    careers = new Careers(lightTheme);
    expect(about.getContent()).toBe('About page in off white');
    expect(careers.getContent()).toBe('Careers page in off white');

    const aquaTheme = new AquaTheme();
    about = new About(aquaTheme);
    careers = new Careers(aquaTheme);
    expect(about.getContent()).toBe('About page in light blue');
    expect(careers.getContent()).toBe('Careers page in light blue');
  });
});

describe('Composite', () => {
  it("Add two different types employee's salary", () => {
    let john = new Developer('John Doe', 11000);
    john.setSalary(12000);
    let jane = new Designer('Jane', 10000);
    jane.setSalary(11000);
    // Add to org
    let organization = new Organization();
    organization.addEmployee(john);
    organization.addEmployee(jane);

    expect(organization.getNetSalaries()).toBe(23000);
  });
});

describe('Decorator', () => {
  it('Check price of coffee add something', () => {
    let someCoffee = new SimpleCoffee();
    expect(someCoffee.getCost()).toBe(10);
    expect(someCoffee.getDescription()).toBe('Simple coffee');

    someCoffee = new MilkCoffee(someCoffee);
    expect(someCoffee.getCost()).toBe(12);
    expect(someCoffee.getDescription()).toBe('Simple coffee, milk');

    someCoffee = new WhipCoffee(someCoffee);
    expect(someCoffee.getCost()).toBe(17);
    expect(someCoffee.getDescription()).toBe('Simple coffee, milk, whip');

    someCoffee = new VanillaCoffee(someCoffee);
    expect(someCoffee.getCost()).toBe(27);
    expect(someCoffee.getDescription()).toBe(
      'Simple coffee, milk, whip, vanilla'
    );
  });
});

describe('Facade', () => {
  it('Turn on the computer by sequence using facade', () => {
    const computer = new ComputerFacade(new Computer());
    console.log = jest.fn();
    computer.turnOn();
    expect(console.log).toHaveBeenNthCalledWith(1, 'Ouch!');
    expect(console.log).toHaveBeenNthCalledWith(2, 'Beep beep!');
    expect(console.log).toHaveBeenNthCalledWith(3, 'Loading..');
    expect(console.log).toHaveBeenNthCalledWith(4, 'Ready to be used!');
  });
  it('Turn off the computer by sequence using facade', () => {
    const computer = new ComputerFacade(new Computer());
    console.log = jest.fn();
    computer.turnOff();
    expect(console.log).toHaveBeenNthCalledWith(1, 'Bup bup bup buzzzz!');
    expect(console.log).toHaveBeenNthCalledWith(2, 'Haaah!');
    expect(console.log).toHaveBeenNthCalledWith(3, 'Zzzzz');
  });
});

describe('Flyweight', () => {
  const teaMaker = new TeaMaker();
  const shop = new TeaShop(teaMaker);

  shop.takeOrder('less suger', 1);
  shop.takeOrder('more milk', 2);
  shop.takeOrder('more milk', 3);
  shop.takeOrder('without suger', 5);

  console.log = jest.fn();
  shop.serve();

  expect(console.log).toHaveBeenCalledTimes(4);
  expect(console.log).toHaveBeenNthCalledWith(1, `Serving tea to table# 1`);
  expect(console.log).toHaveBeenNthCalledWith(2, `Serving tea to table# 2`);
  expect(console.log).toHaveBeenNthCalledWith(3, `Serving tea to table# 3`);
  expect(console.log).toHaveBeenLastCalledWith(`Serving tea to table# 5`);
});

describe('Proxy', () => {
  it('Open the door with bad password', () => {
    const door = new Security(new LabDoor());
    console.log = jest.fn();
    door.open('invalid pass');
    expect(console.log).toBeCalledWith("Big no! It ain't possible.");
  });
  it('Open the door with the correct password', () => {
    const door = new Security(new LabDoor());
    console.log = jest.fn();
    door.open('$ecr@t');
    expect(console.log).toBeCalledWith('Opening lab door');
  });
  it('Close the door', () => {
    const door = new Security(new LabDoor());
    console.log = jest.fn();
    door.close();
    expect(console.log).toBeCalledWith('Closing the lab door');
  });
});
