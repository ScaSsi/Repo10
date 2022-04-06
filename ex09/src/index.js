function myFunction(myObj, checkProp) {
// Only change code below this line
    if(myObj.hasOwnProperty(checkProp)) return myObj[checkProp];
    return "Not Found";
// Only change code above this line
}
var myObj = {
    title: "Titanic",
    song: "My Heart will Go On",
    genre: "drama"
}
console.log(myFunction(myObj, "title"));
console.log(myFunction(myObj, "song"));
console.log(myFunction(myObj, "genre"));
console.log(myFunction(myObj, "actor"));
module.exports = myFunction;