let arrayOfTodos = [
  {
  "userId": 14,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
{
  "userId": 20,
  "id": 2,
  "title": "delectus aut autem",
  "completed": false
}]
console.log(arrayOfTodos[0].userId) // => 14
//  console.log("firstUserId", arrayOfTodos[1].userId) // => 20
const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then( (response) => response.json())
  .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
  console.log(arrayOfTodos)
}

const populateTodos = () => {
  // Then capture the ol item into a variable (getElementById)
  const setToDo = document.getElementById("todo-list")

  for (let index = 0; index < arrayOfTodos.length; index++) {
    console.log(index)
    // createElement to make a new li
    const listItem = document.createElement("li")
    // createText inside the li using the title property.
    const text = document.createTextNode(arrayOfTodos[index].completed);
    // console.log(arrayOfTodos[index].title)

    // if(index % 2) {
    //   listItem.style.color = "red"
    // }
    // Now append the text to the new element.
    listItem.appendChild(text)
    // Then append the element to the ol element.
    setToDo.appendChild(listItem)
    // Put all of that inside your populateTodos function.
    
  }
}

const filterArrayofTodos = () => {
  const userNumber = document.getElementById("numUser")
  var userList = userNumber.value
  console.log(userList)
  if(filterBy = "userId"){
    
    arrayOfTodos = arrayOfTodos .filter(todo=> todo.userId == userList)
  }
  if(filterBy = "completed"){
    arrayOfTodos = arrayOfTodos .filter(todo=> !todo.completed)
  }
  console.log(arrayOfTodos)

  populateTodos()
}


const removeElement = () => {
  const removeToDo = document.getElementById("todo-list").innerHTML =""
}

const filterByCompleted =() => {
  console.log(arrayOfTodos)
  if(filterBy = "completed"){
    arrayOfTodos = arrayOfTodos .filter(todo=> todo.completed)
  }
  console.log(arrayOfTodos)

  populateTodos()
}
const filterByNotCompleted =() => {
  if(filterBy = "completed"){
    arrayOfTodos = arrayOfTodos .filter(todo=> !todo.completed)
  }

  populateTodos()
}