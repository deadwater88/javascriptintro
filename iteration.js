const bubblesort = (arr) => {
  let sorted = false;
  while (!sorted){
    sorted = true;
    arr.forEach( (num, index) =>{
      if (arr[index] > arr[index + 1]) {
        sorted = false;
        let a = arr[index];
        let b = arr[index + 1];
        arr[index] = b;
        arr[index + 1] = a;
      }
    });
  }
  return arr;
};

// console.log(bubblesort([1,4,5,2, 3, 7,8,10, 5, 5]));

const substrings = (str) => {
  let len = str.length;
  let result = [];
  str.split("").forEach( (ch, index) => {
    let n = len - index;
    for (let i = 1; i <= n; i++) {
      let substr = str.slice(index, index+i);
      if (!result.includes(substr)) {
        result.push(substr);
      }
    }
  });
  return result;
};

console.log(substrings("cat")); //=> ["c", "ca", "cat", "a", "at", "t"]
