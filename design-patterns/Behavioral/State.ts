interface WritingState {
  write(words: string): void;
}

export class UpperCase implements WritingState {
  write = (words: string) => {
    console.log(words.toUpperCase());
  };
}

export class LowerCase implements WritingState {
  write = (words: string) => {
    console.log(words.toLowerCase());
  };
}

export class Default implements WritingState {
  write = (words: string) => {
    console.log(words);
  };
}

export class TextEditor {
  protected state: WritingState;

  constructor(state: WritingState) {
    this.state = state;
  }
  setState(state: WritingState) {
    this.state = state;
  }
  type(words: string) {
    this.state.write(words);
  }
}
