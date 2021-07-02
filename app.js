const nouns = [
    'Life',
    'Sensation',
    'Hope',
    'Love',
    'Peace',
    'Tranquility',
    'Resilience',
    'Triumph',
    'Forgiveness'
];

const predicatePhrases = [
    'is beautiful.',
    'is expansive.',
    'is timeless.',
    'is growth.',
    'is longlasting.',
    'is flexible.',
    'is timeless.'
];

const affirmations = [
    'Embrace it!',
    'Cherish it!',
    'Let it guide you!',
    'Use it!',
    'Allow yourself to be empowered by it!',
    'Let it guide you!',
    'Seek it out!'
];

// Tests that the arrays is correct.
/*
for(let i = 0; i < nouns.length; i++){
    console.log(nouns[i]);
    };

for(let i = 0; i < predicatePhrases.length; i++){
    console.log(predicatePhrases[i]);
    };

for(let i = 0; i < affirmations.length; i++){
    console.log(affirmations[i]);
    };
*/

// Creating a placeholder array for our elements.

let placeholderArr = [];

// Function to get a random item from nouns.

function getRandomElement(arr) {
    let randomElement = Math.floor(Math.random() * arr.length);
    let chosenElement = arr[randomElement]
    placeholderArr.push(chosenElement);
};

getRandomElement(nouns);
getRandomElement(predicatePhrases);
getRandomElement(affirmations);

// For testing what gets put into the placeholder array
// console.log(placeholderArr);

// This works, but it doesn't print the elements on one line.
/* placeholderArr.forEach((i) => {
        console.log(i);
});
*/

// Function to print out the placeholderArr's elements into a readable format for the user

/* Can't get this to work
function getInspirationalMessage() {
    for(i = 0; i < placeholderArr.length; i += 1) {
    placeholderArr += i;
    };
    console.log("Here is your inspirational quote for the day:" + placeholderArr);
};

getInspirationalMessage();
*/