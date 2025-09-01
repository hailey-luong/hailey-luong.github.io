// edited from https://www.tutorialspoint.com/typing-and-deleting-effect-with-javascript-and-css

const words = ["visual / product designer", "based in toronto"];
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
      counter = setTimeout(loopTyping, 90);
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
      counter = setTimeout(loopDeleting, 70);
   };
   setTimeout(function(){
      loopDeleting();
   }, 500); 

};
typeNow();
