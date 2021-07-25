export class Sheep {
  protected name: string
  protected category: string

  constructor(name: string, category: string = "Mountain Sheep") {
    this.name = name
    this.category = category
  }

  getName = () => this.name
  setName = (name: string) => {
    this.name = name
  }

  getCategory = () => this.category
  setCategory = (category: string) => {
    this.category = category
  }
}