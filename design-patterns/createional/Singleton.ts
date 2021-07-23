class President {
  private static instance: President

  // Hide the constructor
  private constructor() { }

  static getInstance = (): President => {
    if (!President.instance) {
      President.instance = new President()
    }

    return President.instance
  }
}

export default function SingletonSample() {
  let president1 = President.getInstance()
  let president2 = President.getInstance()
  console.log(president1 === president2)
}