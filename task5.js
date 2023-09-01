/*
1. Rubah function calculator menjadi arrow function
*/

let kalkulator = (angka1, angka2, operator) => {
    if (typeof angka1 !== 'number' || typeof angka2 !== 'number') {
        console.log("Itu bukan angka")
    } else {
        let hasil 

        if (operator === '+') {
            hasil = angka1 + angka2
        } else if (operator === '-') {
            hasil = angka1 - angka2
        } else  if (operator === '*') {
            hasil = angka1 * angka2
        } else  if (operator === '/') {
            hasil = angka1 / angka2
        } else if (operator === '^') {
            hasil = angka1 ** angka2
        } else {
            hasil = "Apalah wei yang mau kau operasikan"
        }
       return hasil
    }
}

console.log(kalkulator(2, 5, "+"))
console.log(kalkulator(2, 5, "-"))
console.log(kalkulator(2, 5, "*"))
console.log(kalkulator(2, 5, "/"))
console.log(kalkulator(2, 5, "^"))
console.log(kalkulator(2, 5, "huwala humba"))

/*
2. Rubah function Konversi Celsius ke Fahrenheit menjadi arrow function dan currying
*/
//ARROW
let konversiSuhuArrow = (celcius) => (celcius * 1.8) + 32

console.log("")
console.log("Konversi Via Arrow")
console.log(konversiSuhuArrow(100))
//CURRYING
const constnta1 = 1.8
const constnta2 = 32
let konversiSuhu = (celcius) => {
    return function (x) {
        return function (y) {
            return (celcius * x ) + y
        }
    }
}     
console.log("")
console.log("Konversi Currying")
console.log(konversiSuhu(70)(constnta1)(constnta2))




