

Array.prototype.uniq = function (){
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (result.includes(this[i])) {
      continue;
    } else {
      result.push(this[i]);
    }
  }
  return result;
};

console.log([1, 2, 1, 3, 3].uniq());
console.log([1, 2, 3, 4].uniq());

Array.prototype.two_sum = function (){
  let result = [];
  let hash = {};
  this.forEach ( function(num, index) {
    if (hash[-num] !== undefined) {
      result.push([hash[-num],index]);
    }
    hash[num] = index;
  });
  //console.log(hash);
  return result.sort();
};

console.log([-1, 0, 2, -2, 1].two_sum()); // [[0, 4], [2, 3]]
console.log([-1, 5, 2, -5, -2].two_sum());  // [ 1, 3], [ 2, 4]


Array.prototype.transpose = function (){
  const cols = this[0].length;
  const rows = this.length;
  let result = Array(rows).fill().map(() => Array());
  this.forEach(function (row){
    row.forEach(function (num, index){
      result[index].push(num);
    });
  });
  return result;
};
console.log(
  [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ].transpose());
