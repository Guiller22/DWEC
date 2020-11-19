let JsonStr1 = `{
    "preguntas": [
        {
            "codigo": 0,
            "enunciado": "¿La capital de Castilla y León es?",
            "respuesta1": "Ninguna",
            "respuesta2": "Valladolid",
            "respuesta3": "León",
            "correcta": 1
        },
        {
            "codigo": 1,
            "enunciado": "¿Cuánto es 15 & 6?",
            "respuesta1": "156",
            "respuesta2": "6",
            "respuesta3": "false",
            "correcta": 2
        },
        {
            "codigo": 2,
            "enunciado": "¿Cómo se llama mi gata?",
            "respuesta1": "Zarpitas",
            "respuesta2": "Schrödinger",
            "respuesta3": "Ciara",
            "correcta": 3
        },
        {
            "codigo": 3,
            "enunciado": "¿En qué año se cree que nació Jesús?",
            "respuesta1": "0 DC",
            "respuesta2": "1 DC",
            "respuesta3": "7 AC",
            "correcta": 3
        },
        {
            "codigo": 4,
            "enunciado": "¿En cuál de estos países hay más hablantes de Castellano?",
            "respuesta1": "España",
            "respuesta2": "Estados Unidos",
            "respuesta3": "Nicaragua",
            "correcta": 2
        },
        {
            "codigo": 5,
            "enunciado": "¿Qué raza de oso es mejor?",
            "respuesta1": "Oso pardo",
            "respuesta2": "Oso panda",
            "respuesta3": "Battlestar Galactica",
            "correcta": 1
        },
        {
            "codigo": 6,
            "enunciado": "¿Para qué sirven los punteros en C?",
            "respuesta1": "Para acceder a direcciones de memoria",
            "respuesta2": "Para ponerle un asterisco a la variable",
            "respuesta3": "Para provocar pantallazos azules al acceder a la memoria del sistema por error",
            "correcta": 1
        },
        {
            "codigo": 7,
            "enunciado": "¿Cuál era el nombre completo de Picasso",
            "respuesta1": "Pablo Picasso",
            "respuesta2": "Pablo José Picasso y Palasso",
            "respuesta3": "Pablo Diego José Francisco de Paula Juan Nepomuceno María de los Remedios Cipriano de la Santísima Trinidad Ruiz y Picasso",
            "correcta": 3
        },
        {
            "codigo": 8,
            "enunciado": "¿Cuál de los siguientes bichos asquerosos no es un insecto?",
            "respuesta1": "Araña",
            "respuesta2": "Escorpión",
            "respuesta3": "Ciempiés",
            "respuesta4": "Ninguno de los anteriores es un insecto",
            "correcta": 4
        },
        {
            "codigo": 9,
            "enunciado": "¿Con qué país comparte Francia su frontera más larga?",
            "respuesta1": "Bélgica",
            "respuesta2": "España",
            "respuesta3": "Brasil",
            "correcta": 3
        }
    ]
}`;
let JsonStr2 = `{
    "examenes": [
        {
            "nombre": "marcos",
            "respuestas": [
                { "codigo": 0, "respuesta": 2 },
                { "codigo": 1, "respuesta": 1 },
                { "codigo": 2, "respuesta": 2 },
                { "codigo": 3, "respuesta": 3 },
                { "codigo": 4, "respuesta": 1 },
                { "codigo": 5, "respuesta": 3 },
                { "codigo": 6, "respuesta": 2 },
                { "codigo": 7, "respuesta": 1 },
                { "codigo": 8, "respuesta": 4 },
                { "codigo": 9, "respuesta": 3 }
            ],
            "puntuacion": 0
        },
        {
            "nombre": "ana",
            "respuestas": [
                { "codigo": 0, "respuesta": 2 },
                { "codigo": 1, "respuesta": 2 },
                { "codigo": 2, "respuesta": 2 },
                { "codigo": 3, "respuesta": 2 },
                { "codigo": 4, "respuesta": 2 },
                { "codigo": 5, "respuesta": 2 },
                { "codigo": 6, "respuesta": 2 },
                { "codigo": 7, "respuesta": 2 },
                { "codigo": 8, "respuesta": 2 },
                { "codigo": 9, "respuesta": 2 }
            ],
            "puntuacion": 0
        },
        {
            "nombre": "miquel",
            "respuestas": [
                { "codigo": 0, "respuesta": 2 },
                { "codigo": 1, "respuesta": 2 },
                { "codigo": 2, "respuesta": 1 },
                { "codigo": 3, "respuesta": 3 },
                { "codigo": 4, "respuesta": 2 },
                { "codigo": 5, "respuesta": 1 },
                { "codigo": 6, "respuesta": 1 },
                { "codigo": 7, "respuesta": 2 },
                { "codigo": 8, "respuesta": 4 },
                { "codigo": 9, "respuesta": 2 }
            ],
            "puntuacion": 0
        },
        {
            "nombre": "tobías",
            "respuestas": [
                { "codigo": 0, "respuesta": 1 },
                { "codigo": 1, "respuesta": 2 },
                { "codigo": 2, "respuesta": 3 },
                { "codigo": 3, "respuesta": 1 },
                { "codigo": 4, "respuesta": 2 },
                { "codigo": 5, "respuesta": 1 },
                { "codigo": 6, "respuesta": 3 },
                { "codigo": 7, "respuesta": 1 },
                { "codigo": 8, "respuesta": 2 },
                { "codigo": 9, "respuesta": 2 }
            ],
            "puntuacion": 0
        },
        {
            "nombre": "bonifacio",
            "respuestas": [
                { "codigo": 0, "respuesta": 1 },
                { "codigo": 1, "respuesta": 2 },
                { "codigo": 2, "respuesta": 1 },
                { "codigo": 3, "respuesta": 1 },
                { "codigo": 4, "respuesta": 2 },
                { "codigo": 5, "respuesta": 3 },
                { "codigo": 6, "respuesta": 3 },
                { "codigo": 7, "respuesta": 3 },
                { "codigo": 8, "respuesta": 3 },
                { "codigo": 9, "respuesta": 3 }
            ],
            "puntuacion": 0
        },
        {
            "nombre": "hermenegilda",
            "respuestas": [
                { "codigo": 0, "respuesta": 3 },
                { "codigo": 1, "respuesta": 2 },
                { "codigo": 2, "respuesta": 1 },
                { "codigo": 3, "respuesta": 3 },
                { "codigo": 4, "respuesta": 2 },
                { "codigo": 5, "respuesta": 1 },
                { "codigo": 6, "respuesta": 3 },
                { "codigo": 7, "respuesta": 2 },
                { "codigo": 8, "respuesta": 1 },
                { "codigo": 9, "respuesta": 3 }
            ],
            "puntuacion": 0
        },
        {
            "nombre": "fariseo manuel",
            "respuestas": [
                { "codigo": 0, "respuesta": 2 },
                { "codigo": 1, "respuesta": 3 },
                { "codigo": 2, "respuesta": 2 },
                { "codigo": 3, "respuesta": 3 },
                { "codigo": 4, "respuesta": 2 },
                { "codigo": 5, "respuesta": 3 },
                { "codigo": 6, "respuesta": 2 },
                { "codigo": 7, "respuesta": 3 },
                { "codigo": 8, "respuesta": 4 },
                { "codigo": 9, "respuesta": 2 }
            ],
            "puntuacion": 0
        },
        {
            "nombre": "cepeda",
            "respuestas": [
                { "codigo": 0, "respuesta": 1 },
                { "codigo": 1, "respuesta": 2 },
                { "codigo": 2, "respuesta": 3 },
                { "codigo": 3, "respuesta": 2 },
                { "codigo": 4, "respuesta": 1 },
                { "codigo": 5, "respuesta": 2 },
                { "codigo": 6, "respuesta": 3 },
                { "codigo": 7, "respuesta": 2 },
                { "codigo": 8, "respuesta": 1 },
                { "codigo": 9, "respuesta": 2 }
            ],
            "puntuacion": 0
        }
    ]
}`;

let oTest = JSON.parse(JsonStr1);
let oStudents = JSON.parse(JsonStr2);

console.log(`Número de preguntas: ${oTest.preguntas.length}`);
console.log(`Número de alumnos: ${oStudents.examenes.length}`);

// calculations:
let test = oTest.preguntas;
let students = oStudents.examenes;

for (let i = 0; i < students.length; i++) {
    let mark = 0;
    for (let j = 0; j < students[i].respuestas.length; j++) {
        let answer = students[i].respuestas[j];
        let question = test.find(q => q.codigo == answer.codigo);
        
        if (answer.respuesta === question.correcta) {
            mark++;
        }
    }
    students[i].puntuacion = mark;
}

jsonStr2 = JSON.stringify(oStudents, null, " ");

// outputs:
console.log("======= JSON =======");
console.log(jsonStr2);
console.log("\n======== RESULTADOS =========");
console.log(oStudents);

let pass = students.filter(v => v.puntuacion >= 5).length;
let passnt = students.length - pass;

console.log(`Aprobados: ${pass}`);
console.log(`Suspensos: ${passnt}`);

// 3 2 6 5 5 5 4 3