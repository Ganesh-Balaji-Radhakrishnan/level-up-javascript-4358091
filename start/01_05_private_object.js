// Write your code here

/* class User{
  #username
  #password
  constructor(username, password, age){
    this.#username = username
    this.#password = password
    this.age = age
  }

  printUsername(){
    console.log(`the name is ${this.#username}`)
  }
}

const Ganesh = new User("Ganesh", "Balaji", 30)
Ganesh.printUsername() */

//alternate method to use a private identfier

const username = Symbol("username")
const password = Symbol("password")

const user = {
  [username] : "Ganesh",
  [password] : "Balaji",
  age: 30
}

console.log(user.username)