const kilometres = Number (prompt ("Quanti chilometri vuoi percorrere?"))
const age = Number (prompt ("Quanti anni hai?"))

const fullPrice = kilometres * 0.21
const fullPriceDecimal = fullPrice.toFixed(2)

if (age < 18) {
    discountPrice = fullPrice - (fullPrice * 20 / 100)
    discountPriceDecimal = discountPrice.toFixed(2)
    document.getElementById('discountPrice').innerHTML = "Il prezzo del suo biglietto sarà di " + discountPriceDecimal + "€"
}else if (age > 65) {
    discountPrice = fullPrice - (fullPrice * 40 / 100)
    discountPriceDecimal = discountPrice.toFixed(2)
    document.getElementById('discountPrice').innerHTML = "Il prezzo del suo biglietto sarà di " + discountPriceDecimal + "€"
}else {
    document.getElementById('fullPrice').innerHTML = "Il prezzo del suo biglietto sarà di " + fullPriceDecimal + "€"
}