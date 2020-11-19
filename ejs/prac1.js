/* simular el paso por el ribera de castilla en cuanto a expediente académico.
 * Simular cada una de las convocatorias (2 por año: junio y septiembre para 1º, marzo y septiembre para 2º).
 * Hay que hacer un examen para cada módulo, siendo un número aleatorio entre 1 y 10.
 * El módulo se aprueba con un 5. Empieza el año 2019. La simulación acaba cuando todo el mundo ha obtenido el título.
 * Participan 20 personas.
 */

// the first year of the simulation.
const STARTING_YEAR = 2019;
const STUDENT_NAMES = [
    "Aker"   , "Horus"   , "Nefertum"  , "Osiris"  , "Ra"     ,
    "Set"    , "Sobek"   , "Thoth"     , "Amunet"  , "Bastet" ,
    "Hathor" , "Imhotep" , "Isis"      , "Nekhbet" , "Sokar"  ,
    "Anubis" , "Kek"     , "Amenhotep" , "Baal"    , "Ishtar" ,
]

/*let logString = "";
let log = (str) => logString += str;*/

class Student {
    name;
    course; // is -1 if the student has finished the degree.
    marks_1 = new Array(subjects_1.length).fill(0);
    marks_2 = new Array(subjects_2.length).fill(0);
    degree = -1; // the year in which this student got the degree. -1 if they still don't have a degree.
    constructor(name) {
        this.name = name;
        this.course = 1;
    }

    checkPromoteTo2() {
        if (this.marks_1.every(m => isPassMark(m))) {
            this.course = 2;
        }
        return this.course === 2;
    }
    checkDegreeCompleted(year) {
        if (this.marks_1.every(m => isPassMark(m)) && this.marks_2.every(m => isPassMark(m))) {
            this.course = -1;
            this.degree = year;
        }
        return this.degree !== -1;
    }
    hasDegree() {
        return this.degree !== -1;
    }

    marks_1AsTable() {
        let arr = [];
        for(let i = 0; i < subjects_1.length; i++) {
            arr.push([subjects_1[i].name, this.marks_1[subjects_1[i].id].toFixed(2)]);
        }
        return arr;
    }

    marks_2AsTable() {
        let arr = [];
        for(let i = 0; i < subjects_2.length; i++) {
            arr.push([subjects_2[i].name, this.marks_2[subjects_2[i].id].toFixed(2)]);
        }
        return arr;
    }

    toString = () => this.name;
}

let subjects_1 = [
    {
        id: 0,
        name: "Programación",
    },
    {
        id: 1,
        name: "Bases de datos",
    },
    {
        id: 2,
        name: "Lenguaje de marcas",
    },
    {
        id: 3,
        name: "Formación y orientación laboral",
    },
    {
        id: 4,
        name: "Sistemas informáticos",
    },
    {
        id: 5,
        name: "Entornos de desarrollo",
    }
]

let subjects_2 = [
    {
        id: 0,
        name: "Entorno de desarrollo (Cliente)",
    },
    {
        id: 1,
        name: "Entorno de desarrollo (Servidor)",
    },
    {
        id: 2,
        name: "Empresa e iniciativa emprendedora",
    },
    {
        id: 3,
        name: "Despliegue de aplicaciones web",
    },
    {
        id: 4,
        name: "Diseño de interfaces web",
    },
]

let allCourseStudents = []
STUDENT_NAMES.forEach(st => allCourseStudents.push(new Student(st)));

/**
 * Returns true if the mark is enough to pass the subject.
 */
function isPassMark(note) {
    return note >= 5;
}

/**
 * Generates a random mark between 0 and 10 (exclusive, because no one is perfect).
 */
function generateMark() {
    return Math.random() * 10;
}

/**
 * Tests every student in the given array in all of the subjects of the 1st course, and tries to promote each student to the 2nd course.
 * @param {Student} students The set of students to test.
 */
function TestCourse1(students) {
    students.forEach(st => {
        if (st.course === 1) {
            subjects_1.forEach(subject => {
                if (!isPassMark(st.marks_1[subject.id])) {
                    st.marks_1[subject.id] = generateMark();
                    //console.log(`${st.name} now has ${st.marks_1[subject.id]} in ${subject.name}`);
                }
            });
            st.checkPromoteTo2();
        }
    });
}

/**
 * Tests every student in the given array in all of the subjects of the 2st course, and tries to give each student the degree.
 * @param {Student} students The set of students to test.
 */
function TestCourse2(students) {
    students.forEach(st => {
        if (st.course === 2) {
            subjects_2.forEach(subject => {
                if (!isPassMark(st.marks_2[subject.id])) {
                    st.marks_2[subject.id] = generateMark();
                    //console.log(`${st.name} now has ${st.marks_2[subject.id]} in ${subject.name}`);
                }
            });
            st.checkDegreeCompleted(year);
        }
    });
}

console.log(
`==================================================================
==================================================================
========================= NEW SIMULATION =========================
==================================================================
==================================================================
`);
let year = STARTING_YEAR;
// each cycle represents an academic year.
while (allCourseStudents.some(st => !st.hasDegree())) {
    let students_1 = allCourseStudents.filter(v => v.course === 1);
    let students_2 = allCourseStudents.filter(v => v.course === 2);

    console.log(`===== CURSO ${year}-${year + 1} =====`);
    console.log(`Este curso tiene ${students_1.length} estudiantes en 1º: ${students_1} y ${students_2.length} estudiantes en 2º: ${students_2}`);

    // conv. march (only 2)
    TestCourse2(students_2);
    // conv. jun (only 1)
    TestCourse1(students_1);
    // conv. sept (1 & 2)
    TestCourse1(students_1);
    TestCourse2(students_2);

    console.log(`En este curso, ${students_1.filter(v => v.course === 2).length} estudiantes de 1º han promocionado a 2º, ` +
                `y ${students_2.filter(v => v.hasDegree()).length} estudiantes de 2º han aprobado el grado.`);

    year++;
    if (year >= 100_000_000) break; // just in case
}

// print the final results:
allCourseStudents.forEach(student => {
    console.log("////////////////////////");
    console.log(`          ${student.name}`);
    console.log("////////////////////////");
    console.log(`Tituló el año: ${student.degree}`);
    console.log(`Con las siguientes notas:`);
    console.table(student.marks_1AsTable());
    console.table(student.marks_2AsTable());
});

console.log(`Al final del año ${year - 1}, todos los estudiantes han titulado.`);