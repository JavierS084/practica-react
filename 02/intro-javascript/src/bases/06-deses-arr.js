const personajes  = ['goku', 'vegeta', 'perez'];


const [ ,p2 ] = personajes;


console.log(p2);

const retornArreglo = () => {

    return ['abc', 123];

}

//desustructuracion de sus variables
const [letras, numeros] = retornArreglo();

console.log(letras, numeros );


//TAREA


    const useState = (valor) => {

        return [ valor , () =>  {console.log('hola mundo')}];

    }
    //desustructuracion de arreglo
    const [nombre, setNombre] = useState('goku');
    console.log(nombre);

    setNombre();