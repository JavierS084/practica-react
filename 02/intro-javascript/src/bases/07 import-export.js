//import { heroes } from './data/heroes';

import { heroes,  owner } from '../data/heroes';

console.log( owner );

/*const getHeroeById = ( id ) => {

   return heroes.find( ( heroe ) => {
       if ( heroe.id === id ){
           return true;

       }else{ 
           return false;
       }
   });
}*/


const getHeroeById = ( id ) => {

   return heroes.find( ( heroe ) => heroe.id === id );
      
   
}



console.log( getHeroeById(2) );

//filter

const getHeroesByOwner = (owner) => heroes.filter( ( heroe ) => owner.id === owner );

console.log( getHeroesByOwner('DC')); 