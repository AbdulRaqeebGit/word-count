let sentence = prompt("Enter a sentence:");
let wordCount = 0;
let isWordStarted = false;

for (let i = 0; i < sentence.length; i++) {
  const char = sentence[i];

  if (char !== ' ') {
    if (!isWordStarted) {
      wordCount++;
      isWordStarted = true;
    }
  } else {
    isWordStarted = false;
  }
}

console.log("Number of words:", wordCount);