import {
  AfricanLion,
  AsianLion,
  Hunter,
  WildDog,
  WildDogAdapter,
} from '../design-patterns/Structural/Adapter';
import {
  About,
  AquaTheme,
  Careers,
  DarkTheme,
  LightTheme,
} from '../design-patterns/Structural/Bridge';

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
    expect(about.getContent()).toBe('About page in dark black')
    expect(careers.getContent()).toBe('Careers page in dark black')

    const lightTheme = new LightTheme()
    about = new About(lightTheme)
    careers = new Careers(lightTheme)
    expect(about.getContent()).toBe('About page in off white')
    expect(careers.getContent()).toBe('Careers page in off white')

    const aquaTheme = new AquaTheme()
    about = new About(aquaTheme)
    careers = new Careers(aquaTheme)
    expect(about.getContent()).toBe('About page in light blue')
    expect(careers.getContent()).toBe('Careers page in light blue')
  });
});

describe('Composite', () => {
    it.todo('Add two different types employee\'s salary')
})