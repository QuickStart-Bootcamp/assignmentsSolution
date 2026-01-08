// getSummary(): Returns a string describing the payment (payer name, amount, and method)
// isLargePayment(): Returns true if the amount is greater than 100, otherwise returns false


class Payment {
  constructor (payerName, amount, method, date) {
    this.payerName = payerName
    this.amount = amount
    this.method = method
    this.data = date
  }

  getSummary () {
    return `${this.payerName} is paying ${this.amount} using ${this.method}`
  }

  isLargePayment () {
    let isLPayment
    // if (this.amount > 100)
    //   return "Greater than 1000 is paid"
    // else
    //   return "Less than a thousand paid"
    isLPayment = (this.amount > 100) ? "true" : "false"
    return isLPayment
  }
}

let payment1 = new Payment ("Mohammad", 1000, "paypal", "2026/01/15")
let payment2 = new Payment ("Melissa", 90, "credit", "2025/01/15")
let payment3 = new Payment ("Luke", 2000, "debit", "2022/01/15")

let paymentArr = [payment1, payment2, payment3]
console.log (paymentArr.length)
for (let i = 0 ; i < paymentArr.length ; i++) {
  console.log (paymentArr[i].getSummary())
}
// console.log (payment1.isLargePayment())
// console.log (payment2.isLargePayment())
// console.log (payment3.isLargePayment())

