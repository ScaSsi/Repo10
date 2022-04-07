// Create school object here
var lion = {
    "name": "Simba",
    "legs": 4,
    "tails": 1
};
// End of school object

// Create a function below this line
function myFunction(arg1, arg2) {
    lion[arg1] = arg2;
    return lion;
}
// End of function
myFunction("roar", "roar-roar");
console.log(lion);
module.exports = myFunction;
