function myFunction(arg1) {
// Only change code below this line
    var lion = {};
    lion.name = "Simba";
    lion.legs = 4;
    lion.tails = 1;
    lion.roar = "roar-roar";

    delete lion[arg1];

    return lion;
// Only change code above this line
}

myFunction("roar");
console.log(myFunction("roar"));
module.exports = myFunction;