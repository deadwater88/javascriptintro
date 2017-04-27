Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

let arr = [1,2,3,4,5,6];


// arr.myEach( x => console.log(x));
// arr.myEach( x => console.log(x * 2));

Array.prototype.myMap = function (callback) {
  let result = [];
  this.myEach(x => result.push(callback(x)));
  return result;
};

let newArr = arr.myMap( x => x * 2);
console.log(newArr);

Array.prototype.myInject = function (callback) {
  let accum = this[0];
  this.slice(1).myEach( (num) => {
    accum = callback(accum, num);
  });
  return accum;
};

let add = ((x,y) => x+y);
console.log([1,2,3,4,5,6].myInject(add)); // 21
