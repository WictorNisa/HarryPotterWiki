
const quoteDiv = document.getElementById('quote-container');







let randomSaying = ["I hope you're pleased with yourselves. We could all have been killed — or worse, expelled. Now if you don't mind, I'm going to bed.” ― Hermione Granger, Harry Potter and the Sorcerer's Stone",

 "“It does not do well to dwell on dreams and forget to live.” ― Albus Dumbledore, Harry Potter and the Sorcerer's Stone",

 "You're a little scary sometimes, you know that? Brilliant ... but scary, — Ron Weasley, Harry Potter and the Sorcerer's Stone",

 "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends. ― Albus Dumbledore, Harry Potter and the Sorcerer's Stone",

 "“Yer a wizard Harry.” ― Hagrid, Harry Potter and the Sorcerer's Stone"
];


// randomSaying.forEach(function(quote){
//   console.log(quote);
//
// });

function displayRandom() {
  let random = randomSaying[Math.floor(Math.random() * randomSaying.length)];
  let html = `
    <h1 class="random-h2">${random}</h1>
  `;

  quoteDiv.innerHTML = html;
}


setInterval(displayRandom, 5000);
