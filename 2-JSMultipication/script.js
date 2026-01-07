
function multipication () {
  let num1 = document.getElementById("number1").value
  let result = ""

  for (let i=1; i<=10; i++) {
    console.log (`${num1} * ${i} = ${num1*i}`)
    result = result + `${num1} * ${i} = ${num1*i} <br>`
  }

  document.getElementById("resultPara").innerHTML = "result is" + result

}



function generateTable () {
  num1 = document.getElementById("number1").value
  let p1 = document.getElementById("resultPara")
  console.log (num1)
    2
    2*1
    2*2
    2*3
    2*4

    3*1
    3*2
    3*3
    3*4
    let result = ""
    for (i=1; i <=10; i++) {
      result = result +  (`${i} * ${num1} = ${i*num1} <br>`)
    }
    p1.innerHTML = result
}