
const quoteDiv = document.getElementById('quote-container');







let randomSaying = ["I hope you're pleased with yourselves. We could all have been killed — or worse, expelled. Now if you don't mind, I'm going to bed.” ― Hermione Granger, Harry Potter and the Sorcerer's Stone",

 "“It does not do well to dwell on dreams and forget to live.” ― Albus Dumbledore, Harry Potter and the Sorcerer's Stone",

 "You're a little scary sometimes, you know that? Brilliant ... but scary, — Ron Weasley, Harry Potter and the Sorcerer's Stone",

 "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends. ― Albus Dumbledore, Harry Potter and the Sorcerer's Stone",

 "“Yer a wizard Harry.” ― Hagrid, Harry Potter and the Sorcerer's Stone",

 "“I solemnly swear I am up to no good.” ― Harry Potter, Harry Potter and the Prisoner of Azkaban",

 "Honestly, am I the only person who's ever bother to read Hogwarts: A History?' — Hermione Granter, Harry Potter and the Prisoner of Azkaban",

 "“But you know, happiness can be found even in the darkest of times, if one only remembers to turn on the light.” ― Albus Dumbledore, Harry Potter and the Prisoner of Azkaban",

 "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals. — Sirius Black, Harry Potter and the Goblet of Fire",

 "“Things we lose have a way of coming back to us in the end, if not always in the way we expect.”  ― Luna Lovegood, Harry Potter and the Order of the Phoenix.",

 "I mean, it's sort of exciting, isn't it, breaking the rules? — Hermione Granger, Harry Potter and the Order of the Phoenix"
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
