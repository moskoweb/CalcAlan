function parD () { if(document.Calculadora.resultado.title == "Calculado"){ document.Calculadora.resultado.title = "";  document.Calculadora.resultado.value = ' ( ' ; } else {document.Calculadora.resultado.value += ' ( '; }} // Parentes Direito
function parE () {  if(document.Calculadora.resultado.title == "Calculado"){ document.Calculadora.resultado.title = ""; document.Calculadora.resultado.value = ' ) ' ; } else {document.Calculadora.resultado.value += ' ) ' ; }};  // Parentes Esquerdo
function colD () {  if(document.Calculadora.resultado.title == "Calculado"){ document.Calculadora.resultado.title = ""; document.Calculadora.resultado.value = ' [ ' ; } else {document.Calculadora.resultado.value += ' [ ' ; }};  // Colchetes Direito
function colE () {  if(document.Calculadora.resultado.title == "Calculado"){ document.Calculadora.resultado.title = ""; document.Calculadora.resultado.value = ' ] ' ; } else {document.Calculadora.resultado.value += ' ] ' ; }};  // Colchetes Esquerdo
// Operações
function soma ()  {  document.Calculadora.resultado.value += ' + ' }; // Mais
function menos () {  document.Calculadora.resultado.value += ' - ' }; // Menos
function vezes () {  document.Calculadora.resultado.value += ' * ' }; // Vezes
function divid () {  document.Calculadora.resultado.value += ' / ' }; // Dividir
// Igual
function igual () {  document.Calculadora.resultado.value = eval(document.Calculadora.resultado.value); document.Calculadora.resultado.title = "Calculado";};
//  Limpa
function limpa () {  document.Calculadora.resultado.value = '' };
//  Números
function num1 () {  document.Calculadora.resultado.value += '1' };
function num2 () {  document.Calculadora.resultado.value += '2' };
function num3 () {  document.Calculadora.resultado.value += '3' };
function num4 () {  document.Calculadora.resultado.value += '4' };
function num5 () {  document.Calculadora.resultado.value += '5' };
function num6 () {  document.Calculadora.resultado.value += '6' };
function num7 () {  document.Calculadora.resultado.value += '7' };
function num8 () {  document.Calculadora.resultado.value += '8' };
function num9 () {  document.Calculadora.resultado.value += '9' };
function num0 () {  document.Calculadora.resultado.value += '0' };
// Seno/Arco Seno - Consseno/Arco Consseno - Tangente/Arco Tangente
function seno () {  document.Calculadora.resultado.value = Math.sin(document.Calculadora.resultado.value) };
function coss () {  document.Calculadora.resultado.value = Math.cos(document.Calculadora.resultado.value) };
function tang () {  document.Calculadora.resultado.value = Math.tan(document.Calculadora.resultado.value) };
function asen () {  document.Calculadora.resultado.value = Math.asin(document.Calculadora.resultado.value) };
function acos () {  document.Calculadora.resultado.value = Math.acos(document.Calculadora.resultado.value) };
function atan () {  document.Calculadora.resultado.value = Math.atan(document.Calculadora.resultado.value) };
// Raiz Quadrada
function raiz () {  document.Calculadora.resultado.value = Math.sqrt(document.Calculadora.resultado.value) };
function potn () {  document.Calculadora.resultado.value = Math.pow(document.Calculadora.resultado.value, 10) };
