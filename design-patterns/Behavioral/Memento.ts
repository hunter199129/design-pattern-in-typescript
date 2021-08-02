class EditorMemento {
  protected content;

  constructor(content: string) {
    this.content = content;
  }
  getContent = () => this.content;
}

export class Editor {
  protected content = '';

  type = (words: string) =>
    (this.content = this.content ? `${this.content} ${words}` : words);
  getContent = () => this.content;
  save = () => new EditorMemento(this.content);

  restore = (memento: EditorMemento) => {
    this.content = memento.getContent();
  };
}
