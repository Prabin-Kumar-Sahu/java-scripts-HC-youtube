// Dates

let myDate = new Date()
// console.log(myDate.toString()); //===> Tue Oct 03 2023 10:03:20 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); //===>Tue Oct 03 2023
// console.log(myDate.toLocaleString());  // ===> 10/3/2023, 10:04:29 AM
// console.log(typeof myDate); // ===> object

let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

// newDate.toLocaleString('default', {
//     weekday: "long",
    
// })
