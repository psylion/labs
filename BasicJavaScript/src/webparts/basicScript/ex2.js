var up = '';
var phr = prompt('Enter a phrase:');
var ar = phr.split(' ');
ar.forEach(toUppercase);
alert(up);

function toUppercase(item, index){
     up = up + ' ' + item.charAt(0).toUpperCase() + item.substr(1)
}