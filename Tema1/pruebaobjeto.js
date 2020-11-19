var persona = new Object();
persona.nombre = 'Julian';
persona.edad = '15';
persona.sexo = 'hombre';

var propiedades= Object.keys(persona);
console.log(propiedades);
propiedades.forEach(x=> console.log(" --> " + persona[x]));
