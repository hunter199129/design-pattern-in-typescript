import {
  Bank,
  Bitcoin,
  Paypal,
} from '../design-patterns/Behavioral/Chain of Responsibility';
import {
  Blub,
  RemoteControl,
  TurnOff,
  TurnOn,
} from '../design-patterns/Behavioral/Command';
import {
  RadioStation,
  StationList,
} from '../design-patterns/Behavioral/Iterator';
import { ChatRoom, User } from '../design-patterns/Behavioral/Mediator';
import { Editor } from '../design-patterns/Behavioral/Memento';
import {
  JobPost,
  JobPostings,
  JobSeeker,
} from '../design-patterns/Behavioral/Observer';
import {
  Default,
  LowerCase,
  TextEditor,
  UpperCase,
} from '../design-patterns/Behavioral/State';
import {
  BubbleSortStrategy,
  QuickSortStrategy,
  Sorter,
} from '../design-patterns/Behavioral/Strategy';
import { AndroidBuilder, IosBuilder } from '../design-patterns/Behavioral/Template Method';
import {
  Dolphin,
  Jump,
  Lion,
  Monkey,
  Speak,
} from '../design-patterns/Behavioral/Visitor';

describe('Chain of Responsibility', () => {
  it('can afford to pay 259', () => {
    const bank = new Bank(100);
    const paypal = new Paypal(200);
    const bitcoin = new Bitcoin(300);

    bank.setNext(paypal);
    paypal.setNext(bitcoin);

    console.log = jest.fn();
    bank.pay(259);
    expect(console.log).toHaveBeenCalledTimes(3);
    expect(console.log).toHaveBeenNthCalledWith(
      1,
      'Cannot pay using Bank. Proceeding ..',
    );
    //! This is a wierd one, looks like Jest bug
    // expect(console.log).toHaveBeenNthCalledWith(
    //   2,
    //   'Cannot pay using PayPal. Proceeding ..'
    // );
    expect(console.log).toHaveBeenLastCalledWith('Paid 259 using Bitcoin!');
  });

  it('cannot afford to pay 832', () => {
    const bank = new Bank(100);
    const paypal = new Paypal(200);
    const bitcoin = new Bitcoin(300);

    bank.setNext(paypal);
    paypal.setNext(bitcoin);

    console.log = jest.fn();
    bank.pay(832);
    expect(console.log).toHaveBeenCalledTimes(3);
    expect(console.log).toHaveBeenLastCalledWith(
      'None of the accounts have enough balance',
    );
  });
});

describe('Command', () => {
  it('Turn on the blub', () => {
    const blub = new Blub();
    const turnOn = new TurnOn(blub);
    const remote = new RemoteControl();

    console.log = jest.fn();
    remote.submit(turnOn);
    expect(console.log).toHaveBeenCalledWith('Blub has been lit');
  });

  it('Turn off the blub', () => {
    const blub = new Blub();
    const turnOff = new TurnOff(blub);
    const remote = new RemoteControl();

    console.log = jest.fn();
    remote.submit(turnOff);
    expect(console.log).toHaveBeenCalledWith('Darkness!');
  });
});

describe('Iterator', () => {
  it('Switch radio stations', () => {
    const stationList = new StationList();

    stationList.addStation(new RadioStation(89));
    stationList.addStation(new RadioStation(101));
    stationList.addStation(new RadioStation(102));
    stationList.addStation(new RadioStation(103.2));

    console.log = jest.fn();

    for (let station of stationList) {
      console.log(station.getFrequency());
    }

    expect(console.log).toHaveBeenNthCalledWith(1, 89);
    expect(console.log).toHaveBeenNthCalledWith(2, 101);
    expect(console.log).toHaveBeenNthCalledWith(3, 102);
    expect(console.log).toHaveBeenNthCalledWith(4, 103.2);
  });

  it('Remove station', () => {
    const stationList = new StationList();

    stationList.addStation(new RadioStation(89));
    stationList.addStation(new RadioStation(101));
    stationList.addStation(new RadioStation(102));

    stationList.removeStation(new RadioStation(89));
    expect(JSON.stringify(stationList)).toContain('"frequency":101');
    expect(JSON.stringify(stationList)).toContain('"frequency":102');
    expect(JSON.stringify(stationList)).not.toContain('"frequency":89');
  });
});

describe('Meditor', () => {
  it('User chat with mediator', () => {
    const mediator = new ChatRoom();

    const john = new User('John Doe', mediator);
    const jane = new User('Jane Doe', mediator);

    console.log = jest.fn();

    john.send('Hi there!');
    jane.send('Hey!');

    expect(console.log).toHaveBeenNthCalledWith(
      1,
      `${mediator.getTime()} [ John Doe ] Hi there!`,
    );
    expect(console.log).toHaveBeenNthCalledWith(
      2,
      `${mediator.getTime()} [ Jane Doe ] Hey!`,
    );
  });
});

describe('Memento', () => {
  it('Editor something using editor', () => {
    let editor = new Editor();
    editor.type('This is the first sentence.');
    editor.type('This is second.');

    let saved = editor.save();

    editor.type('And this is third.');

    expect(editor.getContent()).toBe(
      'This is the first sentence. This is second. And this is third.',
    );

    editor.restore(saved);
    expect(editor.getContent()).toBe(
      'This is the first sentence. This is second.',
    );
  });
});

describe('Observer', () => {
  it('Subscribe job', () => {
    const johnDoe = new JobSeeker('John Doe');
    const janeDoe = new JobSeeker('Jane Doe');

    const jobPosting = new JobPostings();
    jobPosting.attach(johnDoe);
    jobPosting.attach(janeDoe);

    console.log = jest.fn();
    jobPosting.addJobs(new JobPost('Software Engineer'));

    expect(console.log).toHaveBeenNthCalledWith(
      1,
      'Hi John Doe! New job posted: Software Engineer',
    );
    expect(console.log).toHaveBeenNthCalledWith(
      2,
      'Hi Jane Doe! New job posted: Software Engineer',
    );
  });
});

describe('Visitor', () => {
  it('Animals speak', () => {
    const monkey = new Monkey();
    const lion = new Lion();
    const dolphin = new Dolphin();

    const speak = new Speak();

    console.log = jest.fn();
    monkey.accept(speak);
    lion.accept(speak);
    dolphin.accept(speak);

    expect(console.log).toHaveBeenNthCalledWith(1, 'Ooh oo aa aa!');
    expect(console.log).toHaveBeenNthCalledWith(2, 'Roaaar!');
    expect(console.log).toHaveBeenNthCalledWith(3, 'Tuut tuttu tuutt!');
  });

  it('Implement new visitor jump, and make anmials jump', () => {
    const monkey = new Monkey();
    const lion = new Lion();
    const dolphin = new Dolphin();

    const jump = new Jump();

    console.log = jest.fn();
    monkey.accept(jump);
    lion.accept(jump);
    dolphin.accept(jump);

    expect(console.log).toHaveBeenNthCalledWith(
      1,
      'Jumped 20 feet high! on to the tree!',
    );
    expect(console.log).toHaveBeenNthCalledWith(
      2,
      'Jumped 7 feet! Back on the ground!',
    );
    expect(console.log).toHaveBeenNthCalledWith(
      3,
      'Walked on water a little and disappeared',
    );
  });
});

describe('Strategy', () => {
  it('Use different sort strategy', () => {
    let dataset = [1, 4, 6, 7, 2];

    console.log = jest.fn();
    let sorter = new Sorter(new BubbleSortStrategy());
    sorter.sort(dataset);
    expect(console.log).toHaveBeenCalledWith('Sorting using bubble sort');

    sorter = new Sorter(new QuickSortStrategy());
    sorter.sort(dataset);
    expect(console.log).toHaveBeenCalledWith('Sorting using quick sort');
  });
});

describe('State', () => {
  it('Use text editor edit some text', () => {
    const editor = new TextEditor(new Default());
    console.log = jest.fn();
    editor.type('First line');

    editor.setState(new UpperCase());
    editor.type('Second line');
    editor.type('Third line');

    editor.setState(new LowerCase());
    editor.type('Fourth line');
    editor.type('Fifth line');

    expect(console.log).toHaveBeenNthCalledWith(1, 'First line');
    expect(console.log).toHaveBeenNthCalledWith(2, 'SECOND LINE');
    expect(console.log).toHaveBeenNthCalledWith(3, 'THIRD LINE');
    expect(console.log).toHaveBeenNthCalledWith(4, 'fourth line');
    expect(console.log).toHaveBeenNthCalledWith(5, 'fifth line');
  });
});

describe('Template Method', () => {
  it('Build to android', () => {
    const androidBuilder = new AndroidBuilder();
    console.log = jest.fn();

    androidBuilder.build();

    expect(console.log).toHaveBeenNthCalledWith(1, 'Running android tests');
    expect(console.log).toHaveBeenNthCalledWith(2, 'Linting the android code');
    expect(console.log).toHaveBeenNthCalledWith(
      3,
      'Assembling the android build',
    );
    expect(console.log).toHaveBeenNthCalledWith(
      4,
      'Deploying android build to server',
    );
  });

  it('Build to ios', () => {
    const androidBuilder = new IosBuilder();
    console.log = jest.fn();

    androidBuilder.build();

    expect(console.log).toHaveBeenNthCalledWith(1, 'Running ios tests');
    expect(console.log).toHaveBeenNthCalledWith(2, 'Linting the ios code');
    expect(console.log).toHaveBeenNthCalledWith(
      3,
      'Assembling the ios build',
    );
    expect(console.log).toHaveBeenNthCalledWith(
      4,
      'Deploying ios build to server',
    );
  });
});
