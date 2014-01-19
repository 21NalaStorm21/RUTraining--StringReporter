
var word = window.prompt("Sit down, enter a word into the String Reporter 5000, and prepare to be amazed.", "");
ProcessWord(word);
function ProcessWord(wordToProcess) {
 if (wordToProcess == null)
 {
  alert("We are sorry to see you go.  Please come back to the String Reporter 5000 if you wish to be amazed at a later time.");
 }
 else if (wordToProcess.length == 0)
 {
  var newWord = prompt("You did not enter a word!\n\nPlease enter another word into the String Reporter 5000 that is at least 4 characters in order to be amazed.");
  ProcessWord(newWord);
 }
 else if (wordToProcess.length < 4)
 {
  var newWord = prompt("You must enter a word that has at least 4 characters!\n\nPlease enter another word into the String Reporter 5000 in order to be amazed.");
  ProcessWord(newWord);
 }
 else
 {
  GenerateAndDisplayAlertText(wordToProcess);
 }
}
function GenerateAndDisplayAlertText(word)
{
 var alertText = "You entered: " + word + "\n" +
     "There are " + word.length + " characters in the word.\n" +
     "The third character is '" + word.charAt(2) + "'\n" +
     "Lowercase: " + word.toLowerCase() + "\n" +
     "Uppercase: " + word.toUpperCase() + "\n" +
     "Example: I have wanted a " + word + " since I was a little boy.\n" +
     "Subword: " + word.substring(1, 3);
 alert(alertText);
}