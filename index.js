const tutorials = [
  'what does the this keyword mean?',//[0]
  'What is the Constructor OO pattern?',//[1]
  'implementing Blockchain Web API',//[2]
  'The Test Driven Development Workflow',//[3]
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => tutorials.map(element => element.split(" ")
.map(word => word[0].toUpperCase () + word.slice (1))
.join (" ")
);
 

// We have 10 indexes
//.upperCase
//.string.length
//index.length
//