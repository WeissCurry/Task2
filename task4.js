/*
1. Mmebuat function calculator
*/

function kalkulator(angka1, angka2) {
    if (typeof angka1 !== 'number' || typeof angka2 !== 'number') {
        console.log("Itu bukan angka")
        return
    }
    
    let mauTambah = angka1 + angka2
    let mauKurang = angka1 - angka2
    let mauKali = angka1 * angka2
    let mauBagi = angka1 / angka2
    let mauPangkat = angka1 ** angka2
    
    return {
        tambah: mauTambah,
        kurang: mauKurang,
        kali: mauKali,
        bagi: mauBagi,
        pangkat: mauPangkat,
    }
}

let num1 = 2
let num2 = 10
let hasil = kalkulator(num1, num2)

if (hasil) {
    console.log("Hasil dari : " + num1 + " + " + num2 + " = " +  hasil.tambah)
    console.log("Hasil dari : " + num1 + " - " + num2 + " = " + hasil.kurang)
    console.log("Hasil dari : " + num1 + " x " + num2 + " = " + hasil.kali)
    console.log("Hasil dari : " + num1 + " / " + num2 + " = " + hasil.bagi)
    console.log("Hasil dari : " + num1 + " ^ " + num2 + " = " + hasil.pangkat)
} else {
    console.log("Tidak dapat melakukan  kalkulator")
}

/*
2. Buatkan soal sebelumnya dengan function declaration dan expression
*/

let suhuCelcius2Fahrenheit = function (suhu) {
    let fahrenheit = ((suhu * 9) /5) + 32
    return fahrenheit
}
console.log(suhuCelcius2Fahrenheit(50))