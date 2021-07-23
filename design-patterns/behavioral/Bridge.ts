interface IWebPage {
  getContent(): string
}

class About implements IWebPage {
  protected theme: Theme
  constructor(theme: Theme) {
    this.theme = theme
  }
  getContent = () => {
    return `About page in ${this.theme.getColor()}`
  }
}

class Careers implements IWebPage {
  protected theme: Theme
  constructor(theme: Theme) {
    this.theme = theme
  }
  getContent = () => {
    return `Careers page in ${this.theme.getColor()}`
  }
}

class Theme {
  getColor = () => {}
}
class DarkTheme implements Theme {
  getColor = () => 'Dark black'
}
class LightTheme implements Theme {
  getColor = () => 'Off white'
}
class AquaTheme implements Theme {
  getColor = () => 'Light Blue'
}

export default function bridge() {
  let darkTheme = new DarkTheme()

  let about = new About(darkTheme)
  let careers = new Careers(darkTheme)

  console.log(about.getContent())
  console.log(careers.getContent())
}