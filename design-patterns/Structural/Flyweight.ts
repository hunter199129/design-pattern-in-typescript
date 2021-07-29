class KarakTea {}

export class TeaMaker {
  protected availableTea: any = {};

  make(preference: string) {
    if (!this.availableTea[preference]) {
      this.availableTea[preference] = new KarakTea();
    }
    return this.availableTea[preference];
  }
}

export class TeaShop {
  protected orders: any = {};
  protected teaMaker: TeaMaker;

  constructor(teaMaker: TeaMaker) {
    this.teaMaker = teaMaker;
  }
  takeOrder(teaType: string, table: number) {
    this.orders[table] = this.teaMaker.make(teaType);
  }
  serve() {
    Object.keys(this.orders).forEach((table: string) => {
      console.log(`Serving tea to table# ${table}`);
    });
  }
}
