/* 1. Soal Latihan Topic 3 jadikan function beserta parameter agar menjadi dinamis */

console.log("")
console.log("FUNCTION STRING")

// function string manipulation
let namen = "Maulana Asykari Muhammad"

function namaBesar (nama){
    let hasil = nama.toUpperCase()
    return hasil
}

function namaKecili (nama){
    let hasil = nama.toLowerCase()
    return hasil
}

function namaDepan (nama){
    let namaJadiArray = nama.split(" ")
    let hasil = namaJadiArray[0]
    return hasil  
    
}

function namaImSatz (nama){
    let hasil = nama +" "+`Love Javascript`
    return hasil 
}

function namaLastChar (nama){
    let hasil = nama[nama.length-1]
    return hasil
}
console.log("")
console.log("* MANIPULASI STRING *")
console.log(namen)
console.log(namaBesar(namen))
console.log(namaKecili(namen))
console.log(namaDepan(namen))
console.log(namaDepan(namaImSatz(namen)))
console.log(namaLastChar(namen))

// function data manipulation
let object = {
    name : "Maulana",
    age : 19,
    usia : "19",
    tinggi : "171.07",
    status : true,
}

function dataToInt (data) {
    let hasil = parseInt(data)
    return hasil
}

function dataBulat (data) {
    let hasil = parseFloat(data)
    return hasil
}

function dataCheck (data) {
    let hasil = typeof(data)
    return hasil
}

console.log("")
console.log("* MANIPULASI DATA *")
console.log(object.usia)
console.log(dataToInt(object.usia))
console.log(object.tinggi)
console.log(dataToInt(dataBulat(object.tinggi)))
console.log(object.name)
console.log(dataCheck(object.name))
console.log(object.age)
console.log(dataCheck(object.age))
console.log(object.status)
console.log(dataCheck(object.status))

console.log("")
console.log("FUNCTION NUMBER")

//function aritmatic
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

function mauTambah (angka1, angka2) {
    let hasil = angka1 + angka2
    return hasil
}

function mauKurang (angka1, angka2) {
    let hasil = angka1 - angka2
    return hasil
}

function mauKali (angka1, angka2) {
    let hasil = angka1 * angka2
    return hasil
}

function mauBagi (angka1, angka2) {
    let hasil = angka1 / angka2
    return hasil
}

function mauPangkat (angka1, angka2) {
    let hasil = angka1 ** angka2
    return hasil
}

console.log("")
console.log("* ARITMATIC *")
console.log("Hasil dari : " + angkaAngke.num1 + " + " + angkaAngke.num2 + " = ")
console.log(mauTambah(angkaAngke.num1, angkaAngke.num2))
console.log("Hasil dari : " + angkaAngke.num1 + " - " + angkaAngke.num2 + " = ")
console.log(mauKurang(angkaAngke.num1, angkaAngke.num2))
console.log("Hasil dari : " + angkaAngke.num3 + " x " + angkaAngke.num4 + " = ")
console.log(mauKali(angkaAngke.num3, angkaAngke.num4))
console.log("Hasil dari : " + angkaAngke.num3 + " / " + angkaAngke.num4 + " = ")
console.log(mauBagi(angkaAngke.num3, angkaAngke.num4))
console.log(angkaAngke.base + "^" + angkaAngke.exponent + " = ")
console.log(mauPangkat(angkaAngke.base,angkaAngke.exponent))

//function Array & Odd,Even Number

function mauRataArr (angka1) {
    let hasil = (angka1.reduce((accumulator, currentValue) => accumulator + currentValue, 0))/angka1.length
    return hasil
}

function mauGage(angka1) {
    if (angka1 <= 0) {
      return "Input salah";
    } else if (angka1 % 2 === 0) {
      return "Genap"
    } else {
      return "Ganjil"
    }
}

console.log("")
console.log("* ARRAY & ODD, EVEN NUMBER *")
console.log("Rata-rata dari : " + angkaAngke.array + " = ")
console.log(mauRataArr(angkaAngke.array))
console.log(angkaAngke.num5 + " Adalah : ")
console.log(mauGage(angkaAngke.num5))

//function Random 
function mauRandom() {
    let hasil = Math.round(Math.random() * 4) + 1;
    return hasil 
  }

console.log("")
console.log("* RANDOM *")
console.log(mauRandom()) 

/* 2. Konversi Celsius ke Fahrenheit: Buatlah sebuah fungsi yang menerima satu parameter berupa suhu dalam Celsius dan mengembalikan suhu dalam Fahrenheit. (Rumus: Fahrenheit = (Celsius * 9/5) + 32) */
console.log("")
console.log("CELCIUS TO FAHRENHEIT")
function suhuCelcius2Fahrenheit(suhu) {
    let fahrenheit = suhu * 9/5 + 32
    return fahrenheit
}
console.log(suhuCelcius2Fahrenheit(90))

/* 3. Pangkat Sederhana: Buatlah sebuah function yang menerima dua parameter: base (angka dasar) dan exponent (pangkat). Fungsi ini akan mengembalikan hasil dari base dipangkatkan exponent. */
console.log("");
console.log("FUNCTION EXPONEN")
function exponent (base, pangkat) {
    let hitung = base ** pangkat
    return hitung
}
console.log(exponent(2,5));


/* 4. Cek Huruf Vokal: Buatlah sebuah fungsi yang menerima satu parameter berupa huruf (string dengan panjang 1) dan mengembalikan "Vokal" jika huruf adalah vokal dan "Bukan Vokal" jika huruf bukan vokal. */


function aiueo (huruf) {
    let vokal = ['a', 'i', 'u', 'e', 'o']
    let hasil = huruf.toLowerCase() // Mengubah huruf menjadi huruf kecil
    if (hasil.includes(vokal)) {
        return `huruf ${huruf} adalah huruf Vokal`
    } else {
        return `huruf ${huruf} bukan huruf Vokal`
      
    }
}  

console.log("");
console.log("FUNCTION VOKAL")
console.log(aiueo('B'))
console.log(aiueo('E'))
  