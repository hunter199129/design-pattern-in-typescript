import {
  IronDoorFactory,
  WoodenDoorFactory,
} from '../design-patterns/Createional/Abstract Factory';
import { Burger, BurgerBuilder } from '../design-patterns/Createional/Builder';
import {
  DevelopmentManager,
  MarketingManager,
} from '../design-patterns/Createional/Factory Method';
import { Sheep } from '../design-patterns/Createional/Prototype';
import { DoorFactory } from '../design-patterns/Createional/Simple Factory';
import { President } from '../design-patterns/Createional/Singleton';

describe('Abstract Factory', () => {
  it('Build wooden door from factory', () => {
    const woodenFactory = new WoodenDoorFactory();
    let door = woodenFactory.makeDoor();
    let expert = woodenFactory.makeFittingExpert();
    console.log = jest.fn();
    door.getDescription();
    expect(console.log).toHaveBeenCalledWith('I am a wooden door');
    expert.getDescription();
    expect(console.log).toHaveBeenCalledWith('I can only fit wooden doors');
  });

  it('Build iron door from factory', () => {
    const ironFactory = new IronDoorFactory();
    let door = ironFactory.makeDoor();
    let expert = ironFactory.makeFittingExpert();
    console.log = jest.fn();
    door.getDescription();
    expect(console.log).toHaveBeenCalledWith('I am a iron door');
    expert.getDescription();
    expect(console.log).toHaveBeenCalledWith('I can only fit iron doors');
  });
});

describe('Builder', () => {
  it('Build size 14 burger add (pepperoni, letture, tomato)', () => {
    let burger = new BurgerBuilder(14)
      .addPepperoni()
      .addLettuce()
      .addTomato()
      .build();
    expect(burger).toBeInstanceOf(Burger);
    expect(burger.getState()).toMatchObject({
      size: 14,
      pepperoni: true,
      lettuce: true,
      tomato: true,
    });
  });
  it('Build size 10 cheese burger', () => {
    let cheeseBurger = new BurgerBuilder(10).addCheese().build();
    expect(cheeseBurger.getState()).toMatchObject({
      cheese: true,
    });
  });
});

describe('Factory Method', () => {
  it('Development manager take interview', () => {
    console.log = jest.fn();
    const devManager = new DevelopmentManager();

    devManager.takeInterview();

    expect(console.log).toBeCalledWith('Asking about design patterns!');
  });

  it('Marketing manager take interview', () => {
    console.log = jest.fn();
    const marketManager = new MarketingManager();

    marketManager.takeInterview();

    expect(console.log).toBeCalledWith('Asking about community building');
  });
});

describe('Prototype', () => {
  it('Clone dolly', () => {
    const jolly = new Sheep('Jolly');
    jolly.getName();
    expect(jolly.getName()).toBe('Jolly');
    jolly.getCategory();
    expect(jolly.getCategory()).toBe('Mountain Sheep');

    const dolly = { ...jolly };
    dolly.setName('Dolly');
    dolly.setCategory('Cloned Sheep');
    dolly.getName();
    expect(dolly.getName()).toBe('Dolly');
    dolly.getCategory();
    expect(dolly.getCategory()).toBe('Cloned Sheep');

    expect(dolly).not.toEqual(jolly);
  });
});

describe('Simple Factory', () => {
  it('Make Width 100 height 200 wooden door', () => {
    let door = DoorFactory.makeDoor(100, 200);
    expect(door.getwidth()).toBe(100);
    expect(door.getheight()).toBe(200);
  });
});

describe('Singleton', () => {
  it('Object in singleton should be the same', () => {
    let president1 = President.getInstance();
    let president2 = President.getInstance();

    expect(president1).toEqual(president2);
  });
});
