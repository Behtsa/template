var phrase = prompt("Enter the phrase you want to cipher: ").toUpperCase();

var cipher = function(str, shift){
  var cipherPhrase = [];
  for (var i = 0; i < str.length; i++){
      var cipherAscii = ((str.charCodeAt(i) - 65 + shift) % 26 + 65);
      var cipherLetter = String.fromCharCode(cipherAscii);
      cipherPhrase.push(cipherLetter);
  }
  return cipherPhrase.join('');
}

var cipherPhrase = cipher(phrase, 33);

var decipher = function(cipherPhrase, shift){
  var decipherPhrase = [];
  for(var i = 0; i < cipherPhrase.length; i++){
    var decipherAscii = ((cipherPhrase.charCodeAt(i) + 65 - 33) % 26 + 65);
    var decipherLetter = String.fromCharCode(decipherAscii);
    decipherPhrase.push(decipherLetter);
  }
  return decipherPhrase.join('');
}


document.write(cipherPhrase);
document.write(decipher(cipherPhrase, 33));
//console.log(cipherPhrase);
//console.log(decipher(cipherPhrase, 33));