//desustructuracion

const persons = {


    nombre: 'tony',
    edad: 45,
    clave: 'iroman'
 
}


/**
 
 console.log(nombre);
 console.log(edad);
 console.log(clave);
 * 
 */

//const { nombre, edad, clave } = usuario;


//desustructuracion

const useContext = ({nombre, edad, clave, rango = 'capitan '}) => {
     

   // console.log(edad, clave, nombre, rango);

    return{
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 15.222,
            lng: -5454 
        }
    }
 

}
//asignacion desustructurante


const {nombreClave, anios, latlng:{ lat, lng} } = useContext( persons );


console.log(nombreClave, anios); 
console.log(lat, lng);
//retornoPersona(persons);