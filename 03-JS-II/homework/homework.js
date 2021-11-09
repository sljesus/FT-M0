// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if(x===y){
    return x
  } if(x<y){
    return y
  } return x
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
// comparar con 18 edad y devolcer si es igual o mayor con if
if(edad>=18){
  return "Allowed";
} 
return "Not allowed";
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
switch(status){
  case 1:
    return "Online";
    break;
  case 2:
    return "Away";
    break;
  default:
      return "Offline";
      break;

}
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  switch(idioma){

    case "aleman":
      return "Guten Tag!";
      break;
    case "ingles":
      return "Hello!";
      break;
    case "mandarin":
      return "Ni Hao!";
      break;      
    default:
        return "Hola!";
        break;
  
  }  
}

/*
Para implementar la siguiente función vamos a utilizar una estructura de control de flujo nueva, 
llamada switch, si no estás familiarizado con esta estructura, es un buen escenario para hacerle 
una visita al mejor amigo del programador, INTERNET! 
En la carrera del desarrollador constantemente es necesario recurrir a los recursos que nos 
proporciona la web (Google, YouTube, MDN, Stack Overflow, y muchos más) en búsqueda de las 
herramientas necesarias para resolver los distintos problemas que nos enfrentamos, por lo que 
aprender a realizar estas búsquedas en internet es uno de los skill más importantes que puedes 
adquirir!
En tu buscador basta con simplemente escribir "switch Javascript" y listo. Éxitos!
*/
function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  switch(color){
  case "blue":
    return "This is blue";
    break;
  case "red":
    return "This is red";
    break;
  case "green":
    return "This is green";
    break;
  case "orange":
    return "This is orange";
    break;
  case "orange":
    return "This is orange";
    break;
  default:
    return "Color not found"

  }
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if(numero === 10 || numero === 5){
    return true
  } return false
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero < 50 && numero > 20){
    return true
  } return false
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  if (numero !== Math.floor(numero)){
    return false
  } return true
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if (numero%3===0 && numero%5===0 ){
    return "fizzbuzz"
  } else if(numero%3===0){
    return "fizz"
  } else if (numero%5===0){
    return "buzz"
  } return numero
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  if(num1<0||num2<0||num3<0){
    return "Hay negativos"
  } if (num1===0||num2===0||num3===0){
    return "Error"
  } if(num1>num2 && num1>num3 && num1>0){
    return "Número 1 es mayor y positivo"
  } if(num3> num1 && num3>num2){
    return num3+1
  } return false
   
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  // 2/2 despue 2/1 primo
  // 3/3 - 3/2 = 1.5  - 3/1 es primo
  // 4/4 - 4/3 = 1.3333  - 4/2 =2  entero - 4/1=4 no es primo
  // 5/5- 5/4= 1.75 - 5/3= no int - 5/2 no int - 5 /1 - es primo
  // 7/6= no int, 7/5 no int, 7/4 no int 
  if(numero===0 || numero===1){
    return false
  } 
  for (let i = numero-1; i>=2 ; i--){
    if(numero%i===0){
    return false
    }
  } 
  return true
} 


function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
 if(valor===true){
   return "Soy verdadero"
 } return "Soy falso"
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
 let nts=numero.toString() ;
 if (nts.lengt===3){
   return true
 } return false
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  let r=numero;
  let i=0;
  do{
    i++
    r+=5
  }while(i=8)
  return r
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tieneTresDigitos,
  doWhile
};
