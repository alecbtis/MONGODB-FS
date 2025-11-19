use('escuela');
db.createCollection('alumnos');
db.alumnos.insertOne({
    nombre:"nose",
    edad: 17,
    direccion:{
        calle:"nose",
        "Número":33,
        ciudad:"queretaro"
    },
    telefono: 12345678910
});
