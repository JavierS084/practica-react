const persona = {
    nombre: 'javier',
    apellido: 'sanchez',
    edad: 24,
    departamento:{
        dep: 'itapua',
        ciudad: 'encarnacion'
    }
};


const animal = {
    typeAnimal: 'Perro',
    raza: 'pitbull',
    edad: 5
}


console.table({

    persona:animal

});

console.log(persona);

//sintaxis spread para clonar objetos
const humano = {...persona};


humano.nombre = 'jsar'
humano.apellido = 'martinez'

console.log(humano);