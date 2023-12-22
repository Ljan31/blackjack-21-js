import _ from 'underscore';
import {
    crearDeck, pedirCarta, valorCarta,
    crearCarta,acumularPuntos,
    determinarGanador, turnoComputadora
} from './usecases/index';

/**
 * 2C = two of clubs
 * 2D = two of diamands
 * 2H = two of hearts
 * 2S = two of spades
 */

//encapsulacion para proteger el codigo, empaquetar
// Patron modulo - funciona autoejecutable

const miModulo = (()=>{
  'use strict'    
  

  let deck = [];
  const tipos = ['C','D','H','S'],
  especiales = ['A','J','Q','K'];

  // let puntosJugador = 0, puntosComputadora = 0;
  let puntosJugadores = [];

  // Referencias del HTML
  const btnPedir = document.querySelector('#btnPedir'),
  btnDetener = document.querySelector('#btnDetener'),
  btnNuevo = document.querySelector('#btnNuevo');

  // const divCartasJugador = document.querySelector('#jugador-cartas'),
  // divCartasComputadora = document.querySelector('#computadora-cartas'),
  const divCartasJugadores = document.querySelectorAll('.divCartas'),
  puntosHTML = document.querySelectorAll('small');

  // Esta funcoin inicializa el juego
  const inicializarJuego = (numJugadores = 2) =>{
      deck = crearDeck(tipos, especiales);
      puntosJugadores = [];
      for(let i = 0; i < numJugadores; i++){
          puntosJugadores.push(0);
      }
      puntosHTML.forEach(elem => elem.innerText = 0);
      divCartasJugadores.forEach( elem => elem.innerHTML = '');

      btnPedir.disabled = false;
      btnDetener.disabled = false;
  }
 
  // Eventos
  btnPedir.addEventListener('click', () => {
      const carta = pedirCarta(deck);
      const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosHTML);
    //  console.log(deck)
      crearCarta(carta , 0, divCartasJugadores);
      
      if (puntosJugador > 21){
          console.warn('Lo siento, peridste');
          btnPedir.disabled = true;    
          btnDetener.disabled = true;        
          turnoComputadora( puntosJugador, deck, puntosJugadores, divCartasJugadores, puntosHTML ); 
      
      }else if (puntosJugador === 21){
          console.warn('21, genial!!');
          btnPedir.disabled = true;  
          btnDetener.disabled = true;   
          turnoComputadora( puntosJugador, deck, puntosJugadores, divCartasJugadores, puntosHTML ); 
      }
              
  });

  btnDetener.addEventListener('click', () => {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
    //   console.log(puntosJugadores[0])
      turnoComputadora( puntosJugadores[0], deck, puntosJugadores, divCartasJugadores, puntosHTML ); 
  })

  btnNuevo.addEventListener('click', () => {
      
      inicializarJuego();
      
  });

  return {
      nuevoJuego: inicializarJuego
  };
})();
//https://www.toptal.com/developers/javascript-minifier