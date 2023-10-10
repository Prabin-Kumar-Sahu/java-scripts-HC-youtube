// const promiseOne = new Promise(function(resolve,reject)
// {

// // Do an asyn task i.e DataBase call , cryptography , network call

// setTimeout(function()
// {
//     console.log("asyn task is complete")
//     resolve()

// },1000)


// })


// promiseOne.then(function()
// {
//     console.log("Promise consume")
// })




// new Promise(function(resolve,reject)
// {
//     setTimeout(function()
//     {
//         console.log("hello")
//         resolve()

//     },1000)
// }).then(function()
// {
//     console.log("asyn2 is resolved")
// })












// const promisethree=new Promise(function(resolve , reject)
// {
//     setTimeout(function()
//     {
//         resolve({userName:"Prabin", email:"google@.com"})
//     },1000)
// })
// promisethree.then(function(user)
// {
//     console.log(user)

// })





// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {

//         let error = true

//         if (!error) {
//             resolve({ name: "Papun", password: "12343" })
//         }
//         else {
//             reject('ERROR SOMETHING WENT WRONG')
//         }
//     }, 1000)

// })

// promiseFour.then((user) => {
//     console.log(user)
//     return user.name
// }).then((userName) => {
//     console.log(userName)
// }).catch(function (error) {
//     console.log("error")
// }).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive=new Promise(function(resolve, reject)
    {
        setTimeout(function()
        {
            let error=false
            if(!error)
            {
                resolve({username:"Prabin", password:"2133"})
            }
            else{
                reject("something went wrong")
            }
        },1000)
    })
    async function consumePromiseFive()
        {
            const response=await promiseFive()
            console.log(response)
        }
    
consumePromiseFive()



// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))