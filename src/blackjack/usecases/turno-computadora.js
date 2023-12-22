import { pedirCarta, acumularPuntos, crearCarta, determinarGanador } from './';
// turno computadora
/**
 * 
 * @param {Number} puntosMinimos  pts minosmos del jugador
 * @param {Array<String>} deck 
 * @param {Array<Number>} puntosJugadores 
 * @param {Arrar<Element>} divCartasJugadores
 * @param {Arrar<HTMLElement>} puntosHTML 
 */
export const turnoComputadora = ( puntosMinimos, deck, puntosJugadores, divCartasJugadores, puntosHTML ) => {
    if(!puntosMinimos) throw new Error('Pts minimos son necesarios');
    let puntosComputadora = 0;
    do{
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores, puntosHTML );
        
        crearCarta(carta, puntosJugadores.length - 1, divCartasJugadores);

    } while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );
    
    determinarGanador(puntosJugadores);

}
