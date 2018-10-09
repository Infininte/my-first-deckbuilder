export class Bank {
  public money: number;

  constructor(amount: number) {
    this.money = 0;
    this.deposit(amount);
  }

  withdraw(amount: number): number {
    if (amount > this.money) {
      const theLastMoney = this.money;
      this.money = 0;
      return theLastMoney;
    }
    this.money = this.money - amount;
    return amount;
  }

  deposit(amount: number): void {
    this.money = this.money + amount;
  }
}
