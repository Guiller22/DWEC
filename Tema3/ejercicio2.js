var cadenaPersonas = '[\
    {"nombre":"pepe","fechanac":"1980-04-07"},\
    {"nombre":"julia","fechanac":"1986-04-08"},\
    {"nombre":"rebeca","fechanac":"1985-04-09"},\
    {"nombre":"carlos","fechanac":"1984-04-01"},\
    {"nombre":"pepe","fechanac":"1981-04-11"},\
    {"nombre":"pepe","fechanac":"1982-04-12"}\
    ]';
var fechasParseadas =  JSON.parse(cadenaPersonas);
var personas=[];

for(var i =0; i<fechasParseadas.length;i++){
    personas[i]={};
    personas[i].nombre=fechasParseadas[i].nombre;
    personas[i].fechanac=new Date(fechasParseadas[i].fechanac);
}

for(var i =0;i<personas.length;i++){
    if(personas[i].fechanac.getDate() & 0b1){
        personas[i].fechanac.setFullYear(personas[i].fechanac.getFullYear()-1);
    }
    else{
        personas[i].fechanac.setFullYear(personas[i].fechanac.getFullYear()+1)
    }
}
console.log(personas);