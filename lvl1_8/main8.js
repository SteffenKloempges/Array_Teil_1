let deutscheGerichte = new Array();
deutscheGerichte[0] = "Speckkuchen"
deutscheGerichte[1] = "Bratwurst"
deutscheGerichte[2] = "Quarkkeulchen"
deutscheGerichte[3] = "Sauerbraten"

console.log(deutscheGerichte)

deutscheGerichte.unshift("Döner")
deutscheGerichte.unshift("Pizza")
deutscheGerichte.unshift("Burger")
deutscheGerichte.unshift("Kartoffeln")
deutscheGerichte.unshift("Aspick")

console.log(deutscheGerichte)

let nichtGut = new Array();
nichtGut[0] = deutscheGerichte.shift()
nichtGut[1] = deutscheGerichte.shift()
nichtGut[2] = deutscheGerichte.shift()

console.log(nichtGut)