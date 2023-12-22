/**
 * determina el ganador
 * @param {Array<Number>} puntosJugadores 
 */

export const determinarGanador = (puntosJugadores) =>{

    const [puntosMinimos, puntosComputadora] = puntosJugadores;
    setTimeout(() => {
        if(puntosMinimos === puntosComputadora){
            alert('Es un empate')
        }else if(puntosMinimos > 21){
            alert('computadora gana')
        }else if(puntosComputadora > 21){
            alert('Jugador gano')
        }  else {
            alert('computadora gana')
        } 
    },100);

}