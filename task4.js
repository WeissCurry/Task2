/*
1. Mmebuat function calculator
*/

function kalkulator (angka1, angka2) {
    let mauTambah = angka1 + angka2
    let mauKurang = angka1 - angka2
    let mauKali = angka1 * angka2
    let mauBagi = angka1 / angka2
    let mauPangkat = angka1 ** angka2
    
    return {
        tambah : mauTambah,
        kurang : mauKurang,
        kali : mauKali,
        bagi : mauBagi,
        pangkat : mauPangkat,
    }
}

let num1 = 2
let num2 = 10
let hasilOperasi = kalkulator(num1, num2)

console.log("Hasil dari : " + num1 + " + " + num2 + " = " +  hasilOperasi.tambah)
console.log("Hasil dari : " + num1 + " - " + num2 + " = " + hasilOperasi.kurang)
console.log("Hasil dari : " + num1+ " x " + num2 + " = " + hasilOperasi.kali)
console.log("Hasil dari : " + num1+ " / " + num2 + " = " + hasilOperasi.bagi)
console.log("Hasil dari : " + num1+ " ^ " + num2 + " = " + hasilOperasi.pangkat)

/*
2. Buatkan soal sebelumnya dengan function declaration dan expression
*/

let suhuCelcius2Fahrenheit = function (suhu) {
    let fahrenheit = ((suhu * 9) /5) + 32
    return fahrenheit
}
console.log(suhuCelcius2Fahrenheit(50))