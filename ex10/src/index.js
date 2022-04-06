function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "50 Cent",
            title: "In Da Club",
            release_year: 2003,
            formats: {
                1: "8T",
                2: "CD",
                3: "LP"
            },
            gold: false
        }
    };
    return myMusic;
}

myFunction()[2];
//console.log(myFunction()[2]);
module.exports = myFunction;