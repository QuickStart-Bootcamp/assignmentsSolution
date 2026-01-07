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



let paymentData = [
  { name : "mohammad1", amount : "90", method: "paypal1", date: "2026/01/01"},
  { name : "mohammad2", amount : "100", method: "paypal2", date: "2026/01/01"},
  { name : "mohammad3", amount : "1000", method: "paypal3", date: "2026/01/01"}
]

let paymentObj = []
for (let i = 0 ; i < paymentData.length ; i++ ) {
  
  let Newpayment = new Payment (paymentData[i].name, paymentData[i].amount, paymentData[i].method, paymentData[i].date)
  paymentObj.push (Newpayment)
  console.log (Newpayment)
}

console.log (paymentObj)