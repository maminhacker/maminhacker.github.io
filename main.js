(function(){
"use strict"; //Використаємо строгий стандарт
//Створимо шифрувальну функцію
window.CeasarsCipher = function(input){
//Створимо змінні, алфавіт потрібен аби зсувати його та перетворювати повідомлення
var alphabet = "АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ".toLowerCase(),
      key,
      shiftedAlphabet = "",
      result = "",
      STRING,
      otherCharacters = '-=~\"\'#$%&*^:<>?/!{(|)}.1234567890\, ';
 if(typeof input === "object"){
    key = input.shift;
    STRING = input.msg.toLowerCase();
  } else {
      return; }
//Зсування алфавіту
  if(typeof STRING === "string" || typeof (STRING+"") === "string"){
    shiftedAlphabet = alphabet.slice(key);
    shiftedAlphabet += alphabet.slice(0, key);
    shiftedAlphabet += otherCharacters;
    alphabet += otherCharacters;
//Цикл шифрування
    for(var i = 0; i < STRING.length; i++){
    var numberd = alphabet.indexOf( STRING[i] )
    result += shiftedAlphabet[numberd];    }
} else {  return; };  return result; }; })(); 

//Отримання необхідних змінних
document.getElementById("message").addEventListener("input", function(){
	var itsValue = this.value;
  document.getElementById("result").textContent = CeasarsCipher({
     msg: itsValue,
     shift: document.getElementById("shift").value });
});
document.getElementById("shift").addEventListener("keyup", function(){
	var itsValue = this.value;
  document.getElementById("result").textContent = CeasarsCipher({
  	msg: document.getElementById("message").value,
    shift: itsValue 
  })
});
document.getElementById("result").textContent = CeasarsCipher({
  msg: document.getElementById("message").value,
  shift: document.getElementById("shift").value  
});
