# Assignment: Article Viewer Using JSON and the DOM
In this assignment, you will work with a simulated API response. In real life, when your JavaScript connects to a backend server, the server usually returns data in JSON format. This is exactly how modern APIs send information to frontend applications like React, Angular, or even plain JavaScript.
For this exercise, instead of actually calling an API with fetch(), we give you the same JSON directly in a JavaScript variable. This makes it easier to practice without relying on internet calls.bThe JSON below represents an API that returns a list of articles.

## Instructions
1. Create an index.html file. Your page must include:
-A div with the id "articles". This is where the JavaScript will insert the content.
- A script tag that loads scripts.js.
2. In JavaScript, Loop through the data array of apiResponse. Each article contains: title, body, created date, Author Name, Author Age.

3. For each article, create these elements using the DOM
You must use:
-	document.createElement("div")
-	document.createElement("h2")
-	document.createElement("p")
-	element.textContent = "..."
-	parent.appendChild(child")

<strong>Hint:</strong> Remember that, apiResponse.data is an arrayand apiResponse.data[0] gives you the first article.

 
## Simulated API Response
```
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
```