// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)   //add 6
// myArr.push(7)
// myArr.pop()   // delete value at last index

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9)); // false (true/false)
// console.log(myArr.indexOf(3)); // if not present then return -1 



// const newArr = myArr.join()                  //.join() add all array in to a string

// console.log(myArr); ==> [0,1,2,3,4,5]
// console.log( newArr); ===> 0,1,2,3,4,5




// slice, splice



//slice  
        // ex= original array[0,1,2,3,4,5]
      //  const myn1 = myArr.slice(1, 3)     (index 1 include and index 3 exclude)
      //  console.log(myn1); ====> [1,2]
        // orignal array no change after slice [0,1,2,3,4,5]



//splice  
        // ex= original array[0,1,2,3,4,5]
      //  const myn1 = myArr.slice(1, 3)    (index 1 and index 3 both are include)
      //  console.log(myn1); ====> [1,2,3]
        // orignal array change after splice [0,4,5]




console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
