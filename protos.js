function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function () {
  return `${this.owner} loves ${this.name}`;
};

let barry = new Cat("barry", "mark");
let larry = new Cat("larry", "lark");
console.log(barry.owner);
console.log(barry.cuteStatement());

Cat.prototype.cuteStatement = function () {
    return `Everyone loves ${this.name}!`;
};
console.log(barry.cuteStatement());

Cat.prototype.meow = function () {
  console.log(`Meoooowww`);
};

barry.meow();

barry.meow = function () {
  console.log('MEOW MIX');
};

barry.meow();
larry.meow();
