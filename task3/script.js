var pesel = prompt("please enter your PESEL")

var controlSum = 1 * parseInt(pesel[0]) + 3 * parseInt(pesel[1]) + 7 * parseInt(pesel[2]) + 9 * parseInt(pesel[3]) + 1 * parseInt(pesel[4]) + 3 * parseInt(pesel[5]) + 7 * parseInt(pesel[6]) + 9 * parseInt(pesel[7]) + 1 * parseInt(pesel[8]) + 3 * parseInt(pesel[9])

var controlNumber = parseInt(pesel[10])

if (pesel.length === 11 && (10 - (controlSum % 10) === controlNumber)) {
    alert("PESEL is correct")
} else {
    alert("PESEL is incorrect")
}