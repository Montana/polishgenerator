var first = document.getElementById("fName");
var last = document.getElementById("lName");
var button = document.querySelector("button");

var firstArray = ['Jon', 'Tim', 'Joe', 'Jack', 'Don', 'Steve', 'Bill', 'Zack', 'Ted',
 'Stan', 'Dan', 'Paul', 'Brandon', 'Nathan', 'Tom', 'Sally'];
var lastArray = ['Nampalski', 'Brampulskin', 'Kulkslki', 'Fapoolksi', 'Naxtoplkiski', 'Trowinski',
 'Forwinsky', 'Gribalski', 'Sampalski',
 'Cage', 'Mapnalski', 'Crambalski'];

var random = function(){
  var a = firstArray[Math.floor(Math.random() * firstArray.length)];
  var b = lastArray[Math.floor(Math.random() * lastArray.length)];

  first.innerHTML = a;
  last.innerHTML = b;
}
button.addEventListener("click", random);
