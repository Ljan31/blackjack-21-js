import _ from 'underscore';

/**
 * Esta funcion crea un nuevo deck-baraja
 * @param {Array<string>} tiposCarta ejem ['C','D','H','S'],
 * @param {Array<string>} tiposEspeciales ejem ['A','J','Q','K']; 
 * @returns {Array} retorna un nuevo deck de cartas
 */

export const crearDeck = (tiposCarta, tiposEspeciales) => {
    
    if(!tiposCarta || tiposCarta.length === 0) throw new Error('Tipos de carta es obligatorio');
    if(!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('TiposEspeciales de carta es obligatorio');
    
    let deck = [];
    
    for(let i = 2; i <= 10; i++){
        for(let tipo of tiposCarta){
            deck.push(i+tipo);
        }
    }
    for(let tipo of tiposCarta){
        for(let esp of tiposEspeciales){
            deck.push(esp+tipo);
        }
    }
    return _.shuffle(deck);
}


// export default crearDeck;