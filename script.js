//saibaba
const sentences = [
  
  "The quick brown fox jumps over the lazy dog.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "A journey of a thousand miles begins with a single step.",
  "In the middle of difficulty lies opportunity.",
  "Where there is love there is life.",
  "The only way to do great work is to love what you do."
];

const randomImage = document.getElementById("randomImage");
const randomSentence = document.getElementById("randomSentence");

randomImage.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * sentences.length);
  randomSentence.textContent = sentences[randomIndex];
});
