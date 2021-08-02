abstract class Account {
  protected successor: Account | null = null;
  protected balance: number = 0;

  setNext(account: Account) {
    this.successor = account;
  }
  pay(amountToPay: number) {
    if (this.canPay(amountToPay)) {
      console.log(`Paid ${amountToPay} using ${this.constructor.name}!`);
    } else if (this.successor) {
      console.log(`Cannot pay using ${this.constructor.name}. Proceeding ..`);
      this.successor.pay(amountToPay);
    } else {
      console.log('None of the accounts have enough balance');
    }
  }
  canPay(amountToPay: number) {
    return amountToPay <= this.balance;
  }
}

export class Bank extends Account {
  protected balance: number;
  constructor(balance: number) {
    super();
    this.balance = balance;
  }
}

export class Paypal extends Account {
  protected balance: number;
  constructor(balance: number) {
    super();
    this.balance = balance;
  }
}

export class Bitcoin extends Account {
  protected balance: number;
  constructor(balance: number) {
    super();
    this.balance = balance;
  }
}
