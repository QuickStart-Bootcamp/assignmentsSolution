// Simulated API Response
const apiResponse = {
  "data": [
    {
      "id": "1",
      "title": "Learning JSON",
      "body": "JSON helps us send and receive data.",
      "created": "2023-01-10",
      "author": {
        "name": "John Doe",
        "age": 45
      }
    },
    {
      "id": "2",
      "title": "Understanding the DOM",
      "body": "The DOM lets us change the page using JavaScript.",
      "created": "2023-05-22",
      "author": {
        "name": "Mary Smith",
        "age": 33
      }
    },
    {
      "id": "3",
      "title": "JavaScript Essentials",
      "body": "Loops, variables, functions — all important!",
      "created": "2024-01-01",
      "author": {
        "name": "John Doe",
        "age": 45
      }
    }
  ]
};

console.log (apiResponse)
console.log (apiResponse.data)
console.log (apiResponse.data[0])
console.log (apiResponse.data[0].title)
console.log (apiResponse.data[0].body)
console.log (apiResponse.data[0].author)
console.log (apiResponse.data[0].author.name)

let myArray = ["a", "b", "c"]

for (let i=0; i<myArray.length; i++) {
  console.log (myArray[i])
}


let apiData = apiResponse.data
for (let i=0; i<apiData.length; i++) {
  console.log (apiData[i])
  console.log (apiData[i].title)

  // book title
  let newHeading = document.createElement ("h2")
  newHeading.innerText = apiData[i].title

  // book description
  let newParagraph = document.createElement ("p")
  newParagraph.innerText = apiData[i].body

  document.getElementById("articles").append(newHeading)
  document.getElementById("articles").append(newParagraph)
}
