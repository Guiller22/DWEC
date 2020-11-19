var expresion1=  /^[0-9]{1,4}(?!.*(LL|CH))[BCDFGHJKLMNPRSTVWXYZ]{3}/;
var expresion2= /^[0,9]{4}[^AEIOUQ]{3}$/;
var expresion3= /^[0-9]{4}[^A-Z]{3}$/;
var cadena= "1234RW";
var expresion4 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
var cadena1="miito2010@hotmail.es"


console.log(expresion1.test(cadena));
console.log(expresion1.test("3685sfr"));
console.log(expresion4.test(cadena1));


