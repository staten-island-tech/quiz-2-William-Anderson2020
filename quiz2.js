let johnScore = (89 + 120 + 103);
//johnScore = (90 + 130 + 150); //Score test second option.
let johnAverage = johnScore / 3;
let mikeScore = (116 + 94 + 123);
let mikeAverage = mikeScore / 3;

switch(mikeAverage > johnAverage){
    case true:
        console.log(`Mike's team's average is ${mikeAverage - johnAverage} greater than John's. His team's average score is ${mikeAverage}.`);
        break;
    case false:
        console.log(`John's team's average is ${johnAverage - mikeAverage} greater than Mike's. His team's average score is ${johnAverage}`);
        break;
    default:
        console.log(`This shouldn't be possible! Is reality dying?`);
}

let house = prompt("Which FE3H house is best?")
switch(house){
    case "Black Eagles":
        alert("Factually incorrect.");
        break;
    case "Blue Lions":
        alert("Indeed, you are correct.");
        break;
    case "Golden Deer":
        alert("Fear the Deer!");
        break;
    default:
        alert("Use caps.");
}