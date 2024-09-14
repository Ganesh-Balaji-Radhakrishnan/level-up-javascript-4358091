function Book(title,author,ISBN,numCopies){
  this.title = title;
  this.author = author;
  this.ISBN = ISBN;
  this.numCopies = numCopies
}

Book.prototype.getAvailablity = function(){
  return this.numCopies
}

Book.prototype.restock = function(num = 1){
  this.numCopies += num
}

Book.prototype.sell = function(num = 5){
  this.numCopies -= num
}

const HarryPotter = new Book('Harry Potter', 'JKR', 12332, 4)

console.log(HarryPotter.getAvailablity())
HarryPotter.restock(100)
console.log(HarryPotter.getAvailablity())
