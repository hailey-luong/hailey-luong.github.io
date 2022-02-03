// from https://www.tutorialspoint.com/typing-and-deleting-effect-with-javascript-and-css

const words = ["solving problems", "discovering music", "creating with Figma", "animals", "meeting other creatives"];
let i = 0;
let counter;
function typeNow() {
   let word = words[i].split("");
   var loopTyping = function() {
      if (word.length > 0) {
         document.getElementById('shuffle').innerHTML += word.shift();
      } else {
         deleteNow();
         return false;
      };
      counter = setTimeout(loopTyping, 125);
   };
   loopTyping();
};
function deleteNow() {
   let word = words[i].split("");
   var loopDeleting = function() {
      if (word.length > 0) {
         word.pop();
         document.getElementById('shuffle').innerHTML = word.join("");
      } else {
         if (words.length > (i + 1)) {
            i++;
         }
         else {
            i = 0;
         };
         typeNow();
         return false;
      };
      counter = setTimeout(loopDeleting, 75);
   };
   loopDeleting();
};
typeNow();
