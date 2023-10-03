const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);   //===> [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] (array with in an array)

// console.log(marvel_heros[3][1]);   //===> flash



// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);     //===> [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] (array with in an array)



//spread operator//

// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);   //===> [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]




// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_another_array = another_array.flat(Infinity)  // flat used to combine arrays in a single array
// console.log(real_another_array);   //===> [  1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]    all are in a array as depeth set as infinity






// console.log(Array.isArray("Hitesh"))  //===> fasle
// console.log(Array.from("Hitesh")) //  it convert it into a  array  ['H' ,'I' ,'T','E','S','H']
// console.log(Array.from({name: "hitesh"})) // interesting  its gives a empty array as it confuse between name and hitesh





let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));   //===> [ 100, 200, 300 ]  Arrays.of()combine all value to a array