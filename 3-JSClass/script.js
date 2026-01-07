class Payment {

  // payerName, amount, method (e.g., Credit Card, PayPal), date
  constructor (payerName, amount, method, date) {
    this.payerName = payerName
    this.amount = amount
    this.method = method
    this.date = date
  }

  getSummary() {
    // Returns a string describing the payment (payer name, amount, and method)
    return `${this.payerName} paid ${this.amount} using ${this.method}`
  }

  isLargePayment() {
    // let isLarge = this.method > 100 ? true : false
    let isLarge
    if (this.amount > 100 )
      isLarge = "Amount is Larger than 100"
    else
      isLarge = "Amount is less than 100"

    return isLarge
  }

}

let payment1 = new Payment ("Mohammad", 90, "payPal", "2026/01/01")
let payment2 = new Payment ("Chrisitian", 3000, "payPal", "2026/01/01")
let payment3 = new Payment ("Mellisa", 5000, "payPal", "2026/01/01")

let payment = [payment1, payment2, payment3]

for (let i = 0 ; i < payment.length ; i++ ) {
  console.log (payment[i].getSummary())
}


console.log (payment1.isLargePayment())