// let a = '20';
// let b = '16';
// // let str = `${a}${b}`;
// let str = a + b
// console.log(str)

let string = "some test string"

// 1---------------
// let value = string[0]
// console.log(value)

// value = string[string.length - 1]
// console.log(value)
//-----------------
//2
let value = string[0].toUpperCase().concat(
  string.substring(1, string.length - 1),
  string[string.length - 1].toUpperCase()
)
console.log(value)



