/* eslint-disable */
import Currency from "./3-currency.js";

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount !== "number") {
      throw new TypeError("Amount must be number");
    } else {
      this._amount = amount;
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency_name} (${this.currency_code})`;
  }

  convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
