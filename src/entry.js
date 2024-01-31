export default function Entry(title, entry) {
  this.title = title;
  this.entry = entry;
  this.stats = this.stats();
  this.firstSentence = this.getTeaser();
}

Entry.prototype.stats = function() {
  const text = this.entry.split(" ");
  let words = 0;
  let vowels = 0;
  let consonants = 0;
  text.forEach((word) => {
    if(word.trim()) {
      words += 1;
    }
    let vowelMatches = word.match(/[aeiou]/gi);
    if(vowelMatches) {
      vowels += vowelMatches.length;
    }
    let consonantMatches = word.match(/[bcdfghjklmnpqrstvwxyz]/gi);
    if(consonantMatches) {
      consonants += consonantMatches.length;
    }
  });
  let result = [words,vowels,consonants];
  return result;
};


Entry.prototype.getTeaser = function() {
  let text = this.entry.split(" ");
  let sentence = "";
  for(let i = 0; i < 8 && i < text.length; i++) {
    text[i] = text[i].trim();
    if(!text[i]) {
      text.splice(i,1);
      i--;
    } else if(text[i][text[i].length - 1] === ".") {
      sentence += text[i];
      break;
    } else {
      sentence += text[i] + " ";
    }
  }
  return sentence;
};