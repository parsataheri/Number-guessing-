let random= math.floor((math.random()*100)+1);
console.log("random number", random);

let=history =[]

function guess() {
    let guessNumber= document.getElementById("guessNumber").value;
    if (history.includes(guessNumber)) {
        console.log("you already say that number");
        return;
    }

history.push(guessNumber);
if (guessNumber > random) {
    console.log("too big") 
} else if (guessNumber < random) {
    console.log("too small");
} else {
    console.log("correct");
}
console.log("history");
}

