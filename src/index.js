import './css/styles.css';
import Entry from './entry.js';

document.getElementById("entry").value = "";
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const titleSubmission = document.getElementById("title").value;
  const entrySubmission = document.getElementById("entry").value;
  const entry = new Entry(titleSubmission, entrySubmission);
  
  const output = document.getElementById("output");
  let titleOutput = document.createElement("p");
  titleOutput.innerText = "Title: " + entry.title;
  output.append(titleOutput);
  let entryOutput = document.createElement("p");
  entryOutput.innerText = "Entry" + ": " + entry.entry;
  output.append(entryOutput);
  let words = document.createElement("p");
  words.innerText = "Number of Words: " + entry.stats[0];
  output.append(words);
  let vowels = document.createElement("p");
  vowels.innerText = "Number of Vowels: " + entry.stats[1];
  output.append(vowels);
  let consonants = document.createElement("p");
  consonants.innerText = "Number of Consonants: " + entry.stats[2];
  output.append(consonants);
  let sentence = document.createElement("p");
  sentence.innerText = "First Sentence (max 8 words): " + entry.firstSentence;
  output.append(sentence);

  document.getElementById("title").value = "";
  document.getElementById("entry").value = "";
});

