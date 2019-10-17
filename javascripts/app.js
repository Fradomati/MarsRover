/************************** Rover Object Goes Here  **************************/
 
const rover = [
  { 
    direction: "N", 
    x: 0, // Columns
    y: 0, // Rows
    travelLog: [], // Registro de localizaciones
    command: "rffffffff", // Movimientos
  },
  {
    direction: "N", 
    x: 9, // Columns
    y: 9, // Rows
    travelLog: [],
    command: "ffffffffflf",
  }

];



/************************** Genero Vars para las direcciones:  **************************/

let actualDirection; // Dirección actual


/************************** Genero Var para nuevo movimiento:  **************************/

let actualPositionX;
let actualPositionY;



/************************** Tablero 10x10 - "0-9"  **************************/

let tablero = [
["", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", ""],
["", "", "", "o", "", "", "o", "", "", ""], // "o" son los obstáculos
["", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", ""]
]


/************************** Número de Rovers  **************************/

let numRovers = rover.length;



/************************** Variables para evitar el choque de los rovers **************************/

let noChoque;


/************************** Función para girar a la Izquierda.  **************************/

function turnLeft(rover, j){
if(rover[j]) {
actualDirection = rover[j].direction;
if(actualDirection === "N") {
rover[j].direction = "W";
} else if(actualDirection === "W") {
rover[j].direction = "S";
} else if(actualDirection ==="S") {
rover[j].direction = "E";
} else if(actualDirection === "E") {
rover[j].direction = "N";
}

return rover[j].direction,

console.log(`Rover ${[j]} mira a la izquierda hacia: ${rover[j].direction}`);

}

};


/************************** Función para girar a la Derecha  **************************/

function turnRight(rover, j){

if(rover[j]) {
actualDirection = rover[j].direction;
if(actualDirection === "N") {
rover[j].direction = "E";
} else if (actualDirection === "E") {
rover[j].direction = "S";
} else if(actualDirection ==="S") {
rover[j].direction = "W";
} else if(actualDirection === "W") {
rover[j].direction = "N";
}

return rover[j].direction,  
console.log(`Rover ${[j]} mira a la derecha hacia: ${rover[j].direction}`);

}
};



/************************** Función para moverse hacia delante  **************************/

function moveForward(rover, j){

actualDirection = rover[j].direction;
actualPositionX = rover[j].x;
actualPositionY = rover[j].y;


if(actualDirection == "N") {
if(actualPositionY == 0) {  // Evitar que Rover salga del Grid 10x10
console.log(`Rover ${j}: No puedes moverte ahí`)
} else if(test(`(${(rover[j].y - 1)},${(rover[j].x)})`) == 1 ){ //  Aquí se comprueba si hay otro rover en el próximo movimiento y lo detiene.
noChoque = "STOP"; // Le da esta señal a la variable y así el Loop se detendrá.
} else if(tablero[rover[j].y - 1][rover[j].x] != "o"){ // Para comprobar si hay algún obstáculo pregunto
return rover[j].y--;                            // Si los parámatros a donde iría el objeto hay un obstáculo "o"
} else {                                     // Si es no, me devuelve el nuevo valor y lo metemos en el travelLog.
  console.log(`Rover ${j}: Obstáculo encontrado! en (${(rover[j].y - 1)},${(rover[j].x)}) `) // Si es sí, lanzo un mensaje y digo dónde está el obstáculo.
}

} else if(actualDirection == "S") {
if(actualPositionY == 9) {         
console.log(`Rover ${j}: No puedes moverte ahí`)
} else if(test( `(${(rover[j].y + 1)},${(rover[j].x)})`) == 1){
noChoque = "STOP";
} else if(tablero[rover[j].y + 1][rover[j].x] != "o"){
return rover[j].y++;
} else {
  console.log(`Rover ${j}: Obstáculo encontrado! en (${(rover[j].y + 1)},${(rover[j].x)}) `)
}

} else if(actualDirection == "W") {
if(actualPositionX == 0) {         
console.log(`Rover ${j}: No puedes moverte ahí`)
} else if(test(`(${(rover[j].y)},${(rover[j].x - 1)})`) == 1){
noChoque = "STOP";
} else if(tablero[rover[j].y][rover[j].x - 1] != "o"){
return rover[j].x--; 
} else {
  console.log(`Rover ${j}: Obstáculo encontrado! en (${(rover[j].y)},${(rover[j].x - 1)}) `)
}

} else if(actualDirection == "E") {
if(actualPositionX == 9) {         
console.log(`Rover ${j}: No puedes moverte ahí`)
} else if(test(`(${(rover[j].y)},${(rover[j].x + 1)})`) == 1 ){
noChoque = "STOP";
} else if(tablero[rover[j].y][rover[j].x + 1] != "o"){
return rover[j].x++; 
} else {
  console.log(`Rover ${j}: Obstáculo encontrado! en (${(rover[j].y)},${(rover[j].x + 1)}) `)
}
} 
};



/**************************  Funcion para Moverse hacia atrás **************************/

function moveBackward(rover, j){


actualDirection = rover[j].direction;
actualPositionX = rover[j].x;
actualPositionY = rover[j].y;

if(actualDirection == "N") {
if(actualPositionY == 9) {  // Evitar que Rover salga del Grid 10x10
console.log(`Rover ${j}: No puedes moverte ahí`)
} else if(test(`(${(rover[j].y + 1)},${(rover[j].x)})`) == 1){
noChoque = "STOP";
} else if(tablero[rover[j].y + 1][rover[j].x] != "o"){ // Para comprobar si hay algún obstáculo pregunto
return rover[j].y++;                            // Si los parámatros a donde iría el objeto hay un obstáculo "o"
} else {                                     // Si es no, me devuelve el nuevo valor y lo metemos en el travelLog.
console.log(`Rover ${j}: Obstáculo encontrado! en (${(rover[j].y + 1)},${(rover[j].x)}) `) // Si es sí, lanzo un mensaje y digo dónde está el obstáculo.
}

} else if(actualDirection == "S") {
if(actualPositionY == 0) {         
  console.log(`Rover ${j}: No puedes moverte ahí`)
} else  if(test(`(${(rover[j].y - 1)},${(rover[j].x)})`) == 1 ){
  noChoque = "STOP";
} else if(tablero[rover[j].y - 1][rover[j].x] != "o"){
  return rover[j].y--;
  } else {
    console.log(`Rover ${j}: Obstáculo encontrado! en (${(rover[j].y - 1)},${(rover[j].x)}) `)
  }
  
} else if(actualDirection == "W") {
if(actualPositionX == 9) {         
  console.log(`Rover ${j}: No puedes moverte ahí`)
} else if(test(`(${(rover[j].y)},${(rover[j].x + 1)})`) == 1 ){
  noChoque = "STOP";
} else if(tablero[rover[j].y][rover[j].x + 1] != "o"){
  return rover[j].x++; 
  } else {
    console.log(`Rover ${j}: Obstáculo encontrado! en (${(rover[j].y)},${(rover[j].x + 1)}) `)
  }
  
} else if(actualDirection == "E") {
if(actualPositionX == 0) {         
  console.log(`Rover ${j}: No puedes moverte ahí`)
} else if(test(`(${(rover[j].y)},${(rover[j].x - 1)})`) == 1 ){
  noChoque = "STOP";
} else if(tablero[rover[j].y][rover[j].x - 1] != "o"){
  return rover[j].x--; 
  } else {
    console.log(`Rover ${j}: Obstáculo encontrado! en (${(rover[j].y)},${(rover[j].x - 1)}) `)
  }
}
}



/************************** Función para NO CHOCAR con otro Rover *******************************/

function test(x){
  for(j = 0; j < rover.length; j++) {
  if(rover[j].travelLog[rover[j].travelLog.length - 1] == x){
  return 1;
  } else {
  return 0;
  }
  }
  }; 


/************************** Secuencia para realizar los movimientos que le mandemos por la variable "movements"  **************************/

function go(){

noChoque = ""; // Reseteo de la Variable para no chocar.
for(let i = 0; i < 50; i++) { // Este loop pasa por ambos comandos de movimientos (rover 1 y rover 2), por turnos.


for(let j = 0; j < numRovers; j++) {
var move = rover[j].command[i];

if(noChoque != `STOP`){ // Comprobación de que se pueda avanzaar sin chocar
switch(move) {
  case "f": moveForward(rover, j)
    rover[j].travelLog.push(`(${rover[j].y},${rover[j].x})`),
    console.log(`El Rover ${j} está en (${rover[j].y},${rover[j].x})`);
    break;
  case "b": moveBackward(rover, j)
    rover[j].travelLog.push(`(${rover[j].y},${rover[j].x})`),
    console.log(`El Rover ${j} está en (${rover[j].y},${rover[j].x})`);
    break;
  case "r": turnRight(rover, j)
    break;
  case "l": turnLeft(rover, j)
    break;
    default: if(move != undefined){
    console.log(`${move} es un caracter erróneo`); // No acepta los caractéres erróneos
    } 
  }
  
} else {  // Para el Loop si hay posibilidad de choque
  console.log(`Rover: Para! que nos estrellamos con otro Rover`)
  break;
} 
}
}
}
 
 
 
 
 


