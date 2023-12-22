
/**
 * funcion de pedir carta
 * @param {Array<String>} deck 
 * @returns {String} retorna la carta de deck
 */
export const pedirCarta = (deck) =>{
      
    if(!deck || deck.length === 0){
        throw new Error('No hay cartas en el deck');
    }
    return deck.pop();
}