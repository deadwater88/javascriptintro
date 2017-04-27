const recRange = (start, end) => {
  return end < start ? [] : start === end ? end : [start].concat(recRange(start + 1, end));
};

// console.log(recRange(40,3));


const exp = (b, ex) => {
  return ex === 0 ? 1 : b * exp(b, ex - 1);
};

const exp2 = (b, ex) => {
  switch (true) {
    case (ex === 0):
      return 1;
    case (ex === 1):
      return b;
    case (ex % 2 === 0):
      let result = exp2(b, ex / 2);
      return result * result;
    case (ex % 2 !== 0):
      return b * exp2(b, ex-1);
  }
};

// console.log(exp(2 , 6));
// console.log(exp2(2 , 6));

const sumArray = (arr) => {
  return arr.length === 1 ? arr[0] : arr[0] + sumArray(arr.slice(1));
};

// console.log(sumArray([2,4,6]));

const fibs = (n) => {
  if (n === 1) {
    return [1];
  }
  else if (n === 2) {
    return [1,1];
  }
  else {
    let fib = fibs(n-1);
    let next = fib[fib.length - 1] + fib[fib.length - 2];
    return fib.concat(next);
  }
};

// console.log(fibs(3));
// console.log(fibs(12));

const bsearch = (arr, target) => {
  let pivot = Math.floor(arr.length/2);
  let left = arr.slice(0, pivot);
  let right = arr.slice(pivot + 1);
  if (arr[pivot] === target) {
    return pivot;
  } else if (arr.length <= 1) {
    return false;
  } else if (arr[pivot] > target) {
    return bsearch(left, target);
  } else {
    let res = bsearch(right, target);
    return res === false ? false : (pivot + 1 + res);
  }
};

// console.log(bsearch([1,2], 1));// # => 0
// console.log(bsearch([1, 2, 3], 1));// # => 0
// console.log(bsearch([2, 3, 4, 5], 3));// # => 1
// console.log(bsearch([2, 4, 6, 8, 10], 6));// # => 2
// console.log(bsearch([1, 3, 4, 5, 9], 5));// # => 3
// console.log(bsearch([1, 2, 3, 4, 5, 6], 6));// # => 5
// console.log(bsearch([1, 2, 3, 4, 5, 6], 0));// # => nil
// console.log(bsearch([1, 2, 3, 4, 5, 7], 6));// # => nil


const makeChange = (target, coins) => {
  if (coins.includes(target)) {
    return [target];
  } else {
    let new_coins = coins.filter(x => x < target);
    let res = new_coins.map(coin => {
      return [coin].concat(makeChange(target - coin, new_coins));
    });
  return res.sort((a,b) => a.length - b.length)[0];
  }
};

// console.log(makeChange(28, [10, 7, 1]));

const mergeSort = (arr) => {
  if (arr.length === 0) {
    return [];
  } else if (arr.length === 1){
    return arr;
  } else{
    let piv = Math.floor(arr.length/2);
    let left = arr.slice(0, piv);
    let right = arr.slice(piv);
    return merge(mergeSort(left), mergeSort(right));
  }
};

const merge = (left, right) => {
   let result = [];
   while (left.length > 0 && right.length > 0){
     left[0] > right[0] ? result.push(right.shift()) : result.push(left.shift());
   }
  return  result.concat(left).concat(right);
};

//console.log(mergeSort([1,4,5,2, 3, 7,8,10, 5, 5]));

const subsets = (arr) => {
  if (arr.length === 0) {
    return [[]];
  } else {
    let tail = subsets(arr.slice(1));
    let head = arr[0];
    return tail.concat(tail.map(a => a.concat(head)));
  }
};

console.log(subsets([1,2,3]));
