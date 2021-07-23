class Sheep {
  _name: string
  _category: string

  constructor(name: string, category: string = "Mountain Sheep") {
    this._name = name
    this._category = category
  }

  getName = () => this._name
  setName = (name: string) => {
    this._name = name
  }

  getCategory = () => this._category
  setCategory = (category: string) => {
    this._category = category
  }
}

export default function PrototypeSample() {
  const original = new Sheep("Jolly")
  console.log(original.getName())
  console.log(original.getCategory())

  const cloned = { ...original }
  cloned.setName('Dolly')
  console.log(cloned.getName())
  console.log(cloned.getCategory())
}

// deep copy needs extra implementation in typescript