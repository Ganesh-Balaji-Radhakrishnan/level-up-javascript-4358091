// Write your code here

function Movie(title, dir, genre, relYear, rating){
  this.title = title
  this.dir = dir
  this.genre = genre
  this.relYear = relYear
  this.rating = rating
}

Movie.prototype.getInfo = function(){
  return `${this.title}, a ${this.genre} film directed by ${this.dir} was released in ${this.relYear}. it received a rating of ${this.rating}`
}

const HarryPotter = new Movie('Harry Potter', 'JKR', 12332, 2000, 5)
console.log(HarryPotter.getInfo())