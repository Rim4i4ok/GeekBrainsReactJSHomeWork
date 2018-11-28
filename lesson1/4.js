var anketa = {};
anketa[Symbol.iterator] = function* (){
  var name = prompt("What's your name?");
  yield name;
  
  var age = prompt("What's your age?");
  yield age;
  
  var country = prompt("What's your country?");
  yield country;
}

console.log([...anketa])
