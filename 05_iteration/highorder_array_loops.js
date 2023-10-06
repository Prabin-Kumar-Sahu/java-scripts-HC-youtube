// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]


//for of 

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}



// Maps  ==> gives unique value and according to the order the value provided

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);

    // IN :- India
    // USA :- United States of America
    // Fr :- France

}

for (const key of map) {
    //console.log(key)  //  [ 'IN', 'India' ]
    //   [ 'USA', 'United States of America' ]
    //  [ 'Fr', 'France' ]
}

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);

// }





// for in

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {

    // console.log(`${key} shortcut is for ${myObject[key]}`);

    // js shortcut is for javascript
    // cpp shortcut is for C++
    // rb shortcut is for ruby
    // swift shortcut is for swift by apple

}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {

    // console.log(programming[key]);

    // js
    // rb
    // py
    // java
    // cpp
}




//====> map can't be iterate

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }