import {valorCarta} from './'
/**
 * acumular puntos: turno 0:1er jugador, .. n:ultimo jugador 
 * @param {String} carta 
 * @param {Number} turno 
 * @param {Arrar<Number>} puntosJugadores
 * @param {Arrar<HTMLElement>} puntosHTML 
 * @returns {Number}
 */
export const acumularPuntos = ( carta, turno, puntosJugadores, puntosHTML ) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}
