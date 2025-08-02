export let grades = [
    { subject: 'Fisica', grade: '9.9' },
    { subject: 'Matematica', grade: '7.9' },
    { subject: 'Ingles', grade: '9' },
];

export const saveGrade = (newGrade) => {
    grades.push(newGrade);
    console.log("Nota agregada:", newGrade);
    console.log("Estado actual de las notas:", grades);
};

// obtener las notas:
export const getGrades = () => {
    return grades;
};

// actualizar una nota
export const updateGrade = (nota) => {
    let gradeRetrivied = find(nota.subject);
    if (gradeRetrivied != null) {
        gradeRetrivied.grade = nota.grade;
    }
    console.log('arreglo', grades);
};

// buscar una nota por materia
const find = (subject) => {
    for (let i = 0; i < grades.length; i++) {
        if (grades[i].subject === subject) {
            return grades[i];
        }
    }
    return null;
};
