function isValidPassword(arg) {
    var length = arg.length > 7 ? true : false;
    var uppercase;
    for (var i = 0; i < arg.length; i++) {
        if (arg.charAt(i) == arg.charAt(i).toUpperCase()) {
            uppercase = true;
            break;
        } else {
             uppercase = false;
        }
    }
    var numbered;
    for (var i = 0; i < arg.length; i++) {
        if (isNaN(arg.charAt(i)) === false) {
           numbered = true;
           break; 
        } else {
            numbered = false;
        }
    }
    if (length && uppercase && numbered) {
        return "SIQQQQ";
    } else {
        return "NOT SIQQQQ";
    }
}

console.log(isValidPassword("yaish"));
console.log(isValidPassword("YaFish5"));
console.log(isValidPassword("YaRoyalFish10"));

//for (i = 0; i < cars.length; i++) {
  //text += cars[i] + "<br>";
//
//str.charAt(i));
// NaN && '8'
// NaN
