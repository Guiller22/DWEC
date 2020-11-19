var aula = {};

console.log(aula);
console.log(typeof(aula));

Object.defineProperty(aula, 'numero pupitres', {
  value: 16,
  enumerable: true,
});

console.log(aula);