var firstArray = ["A ", "The ", "One ", "The Lone ", "Just a "]
var colorArray = ["Red ", "Orange ", "Yellow ", "Green ", "Blue ", "Purple ", "Brown "]
var fruitArray = ["Banana ", "Apple ", "Durian ", "Lime ", "Lemon ", "Strawberry ", "Blueberry "]
var advArray = ["took it's time to ", "never really seemed to ", "tried to ", "didn't want to ", "was excited to ", "was totally stoked to "]
var verbArray = ["read. ", "run. ", "get around to it's homework. ", "exercise. ", "go out. ", "feel whole. "]
var doomArray = ["fell to it's doom.", "exploded.", "found itself ceasing to exist.", "disappeared out of thin air.", "was born again."]
var howArray = ["eventually ", "suddenly ", "straight up ", "inevitably "]

var firstrandomIndex = Math.floor( Math.random() * firstArray.length );
var colorrandomIndex = Math.floor( Math.random() * colorArray.length );
var fruitrandomIndex = Math.floor( Math.random() * fruitArray.length );
var advrandomIndex = Math.floor( Math.random() * advArray.length );
var verbrandomIndex = Math.floor( Math.random() * verbArray.length );
var doomrandomIndex = Math.floor( Math.random() * doomArray.length );
var howrandomIndex = Math.floor( Math.random() * howArray.length);


console.log(firstArray[firstrandomIndex] + colorArray[colorrandomIndex] + fruitArray[fruitrandomIndex] + advArray[advrandomIndex] + verbArray[verbrandomIndex] + "It " + howArray[howrandomIndex] + doomArray[doomrandomIndex]);
