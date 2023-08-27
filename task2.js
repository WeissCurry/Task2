/* STRING */
// MANIPULASI STRING
console.log(" ")
console.log("MANIPULASI STRING");
let nama = "Maulana Asykari Muhammad"
console.log(nama.length)

console.log(nama)
let namaGede = nama.toUpperCase()
console.log(namaGede)
let namaKecil = nama.toLowerCase()
console.log(namaKecil)

let namaJadiArray = nama.split(" ")

console.log(namaJadiArray[0])
console.log(namaJadiArray[0] +" "+`Love Javascript`)
console.log(nama[0])
console.log(nama[nama.length - 1])

// MENGUBAH TIPE DATA
console.log(" ")
console.log("MENGUBAH TIPE DATA");
let age = "19"
let ageToInt = parseInt(age)
console.log(ageToInt)

let height = "171.07"
let heightToInt = parseInt(height)
console.log(parseFloat(heightToInt))

// PENGECEKAN TIPE DATA
console.log(" ")
console.log("PENGECEKAN TIPE DATA");
let studentObject = {
    name : "Maulana",
    age : 19,
    status : true,
}

console.log(studentObject.name + " Adalah tipe data : " + typeof(studentObject.name))
console.log(studentObject.age + " Adalah tipe data : " + typeof(studentObject.age))
console.log(studentObject.status + " Adalah tipe data : " + typeof(studentObject.status))

/* NUMBER */
let angkaAngke = {
    num1 : 10,
    num2 : 5,
    num3 : 6,   
    num4 : 2,
    num5 : 7,
    base : 3,
    exponent : 4,
    array : [5, 8, 12, 4, 6],
}

// PENJUMLAHAN DAN PENGURANGAN
console.log(" ")
console.log("PENJUMLAHAN DAN PENGURANGAN");
console.log("Hasil dari : " + angkaAngke.num1 + " + " + angkaAngke.num2 + " = ")
console.log(angkaAngke.num1 + angkaAngke.num2)
console.log("Hasil dari : " + angkaAngke.num1 + " - " + angkaAngke.num2 + " = ")
console.log(angkaAngke.num1 - angkaAngke.num2)

// PERKALIAN DAN PEMBAGIAN 
console.log(" ")
console.log("PERKALIAN DAN PEMBAGIAN");
console.log("Hasil dari : " + angkaAngke.num3 + " x " + angkaAngke.num4 + " = ")
console.log(angkaAngke.num3 * angkaAngke.num4)
console.log("Hasil dari : " + angkaAngke.num3 + " / " + angkaAngke.num4 + " = ")
console.log(angkaAngke.num3 / angkaAngke.num4)

// PANGKAT BILANGAN
console.log(" ")
console.log("PANGKAT BILANGAN");
console.log(angkaAngke.base + "^" + angkaAngke.exponent + " = ")
console.log(Math.pow(angkaAngke.base, angkaAngke.exponent))

// RATA-RATA DARI ARRAY
console.log(" ")
console.log("RATA-RATA DARI ARRAY");
let total = angkaAngke.array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
let rataRata = total / angkaAngke.array.length
console.log("Rata-rata dari : " + angkaAngke.array + " " + "Adalah : " + rataRata)

// BILANGAN GANJIL ATAU GENAP
console.log(" ")
console.log("BILANGAN GANJIL ATAU GENAP");

if (angkaAngke.num5 % 2 != 0) {
    console.log(angkaAngke.num5 +" "+ "Ini Ganjil!")
} else {
    console.log(angkaAngke.num5 +" "+ "Ini Genap")
}

/* RANDOM  */
console.log(" ")
console.log("RANDOM");
console.log("dari 0 - 5, anda dapat : ")
console.log(Math.floor(Math.random() * 5))
