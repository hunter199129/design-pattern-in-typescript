export class President {
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
