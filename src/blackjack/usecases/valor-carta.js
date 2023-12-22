/**
 * esta funcion devuelve el valor de la carta
 * @param {String} carta 
 * @returns integer - valor de la carta
 */
export const valorCarta = ( carta ) =>{
      
    const valor = carta.substring(0, carta.length-1);
    // const valor2 = carta.slice(0,-1); // reemplazar en valor, convirtiendo en una funcion de flecha sin corchetes
    return (isNaN(valor))? 
            (valor === 'A') ? 11 : 10 
            : valor * 1; 
    
}