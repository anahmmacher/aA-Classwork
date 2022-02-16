function Cat(name, owner){
    this.name = name;
    this.owner = owner;
    this.meow = function(){
        return "Meow"
    }
}

let cat1 = new Cat("Boba", "Arthur");
let cat2 = new Cat("Latte", "Rebecca");
let cat3 = new Cat("Drogo", "Paulo");
let cat4 = new Cat("Lexie", "Elizabeth");

Cat.prototype.cuteStatement = function(){
    return `Everyone loves ${this.name}!`
}

cat2.meow = function(){
    return "Mao"
}

// console.log(cat1.cuteStatement())
// console.log(cat2.cuteStatement())
// console.log(cat3.cuteStatement())
// console.log(cat4.cuteStatement())

console.log(cat1.meow())
console.log(cat2.meow())
console.log(cat3.meow())
console.log(cat4.meow())