const fs = require('fs');

let freq = 0;
const freqChanges = fs.readFileSync('./input.txt').toString();
const freqChangesArray = freqChanges.split('\n');

//console.log(freqChanges);
// console.log(freqChangesArray);

for (let i = 0; i < freqChangesArray.length; i++) {
  if (freqChangesArray[i].charAt(0) === '+') {
    // console.log("adding");
    let value = Number(freqChangesArray[i].substring(1));
    freq += value;
  } else {
    // console.log("subtracting");
    let value = Number(freqChangesArray[i].substring(1));
    freq -= value;
  }
}

// Resulting frequency
console.log(freq);

freq = 0;
let foundFreqArray = [freq];   // Array of found frequencies
let foundFreq = false;

let i = 0;
while (!foundFreq)
{
  if (freqChangesArray[i].charAt(0) === '+') {
    let value = Number(freqChangesArray[i].substring(1));
    freq += value;
  } else {
    let value = Number(freqChangesArray[i].substring(1));
    freq -= value;
  }

  if (foundFreqArray.includes(freq)) {
    foundFreq = true;
    console.log("Repeat found: " + freq);
  } else {
    foundFreqArray.push(freq);
    i++;
    i = i >= freqChangesArray.length ? 0 : i;
  }
}

console.log(freq);