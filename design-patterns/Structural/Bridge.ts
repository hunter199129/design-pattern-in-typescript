interface IWebPage {
  getContent(): string;
}

export class About implements IWebPage {
  protected theme: ITheme;
  constructor(theme: ITheme) {
    this.theme = theme;
  }
  getContent = () => {
    return `About page in ${this.theme.getColor()}`;
  };
}

export class Careers implements IWebPage {
  protected theme: ITheme;
  constructor(theme: ITheme) {
    this.theme = theme;
  }
  getContent = () => {
    return `Careers page in ${this.theme.getColor()}`;
  };
}

interface ITheme {
  getColor(): string;
}
export class DarkTheme implements ITheme {
  getColor = () => 'dark black';
}
export class LightTheme implements ITheme {
  getColor = () => 'off white';
}
export class AquaTheme implements ITheme {
  getColor = () => 'light blue';
}
