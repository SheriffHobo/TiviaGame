$(function () {

  $("#start").click(playRound);

var round = 0;
var timeLeft = 15;
var corGuesses = 0;
var incorGuesses = 0;
var gameBoard = $('#gamearea');
var questions = [
  {
    question: "From which planet do the Transformers originate?",
    choices: ["Cybertron", "Earth", "Junkion", "Quintessa"],
    correctAnswer: "Cybertron",
    image: "<img src='assets/images/cybertronanswer.jpg' class='img-circle shadow'>"
  }, 
  {
    question: "Finish this song lyric: 'You've got the touch, you've got the _ '",
    choices: ["Power", "Will", "Strength", "Heart"],
    correctAnswer: "Power",
    image: "<img src='assets/images/matrixanswer.jpg' class='img-circle shadow'>"
  }, 
  {
    question: "Before he became Rodimus Prime, he was known as...?",
    choices: ["KITT", "Hot Rod", "Mirage", "Air Wolf"],
    correctAnswer: "Hot Rod",
    image: "<img src='assets/images/hotrodanswer.jpg' class='img-circle shadow'>"
  }, 
  {
    question: "Who was the first female Transformer to appear in the cartoon?",
    choices: ["Elita One", "Firestar", "Arcee", "Nautica"],
    correctAnswer: "Arcee",
    image: "<img src='assets/images/arceeanswer.jpg' class='img-circle shadow'>"
  }, 
  {
    question: "In Beast Wars, Megatron is protrayed as a _ ?",
    choices: ["Stegosaurus", "Triceratops", "Tyrannosaurus Rex", "Velociraptor"],
    correctAnswer: "Tyrannosaurus Rex",
    image: "<img src='assets/images/megatronanswer.jpg' class='img-circle shadow'>"
  }, 
  {
    question: "Scatman Crothers is known for voicing this Transformer?",
    choices: ["Rumble", "Blurr", "Black Arachnia", "Jazz"],
    correctAnswer: "Jazz",
    image: "<img src='assets/images/jazzanswer.jpg' class='img-circle shadow'>"
  }, 
  {
    question: "Which of these Transformers is a Combiner?",
    choices: ["Skytrain", "Devastator", "Scourge", "Beta"],
    correctAnswer: "Devastator",
    image: "<img src='assets/images/devastatoranswer.jpg' class='img-circle shadow'>"
  }, 
  {
    question: "Transformers 'borrowed' this character design from the Anime 'Macross'.",
    choices: ["Ramjet", "Starscream", "Thrust", "Jetfire"],
    correctAnswer: "Jetfire",
    image: "<img src='assets/images/jetfireanswer.jpg' class='img-circle shadow'>"
  }];

function playRound() {
  clearBoard();
  showQuestion();
  displayAnswerChoices();
}

function clearBoard() {
gameBoard.empty();
};

function showQuestion() {
var question = $('<p>').text(questions[round].question);
gameBoard.append(question);
};

function displayAnswerChoices() {
var answerBox = $('<div>');
for (let i = 0; i < 4; i++) {
  var answerChoice = $('<h6>');
  answerChoice.text(questions[round].choices[i]);
  answerChoice.attr('choice', questions[round].choices[i]);
  answerBox.append(answerChoice);
}
gameBoard.append(answerBox);
};

function evaluateAnswer(answerChoice) {
if (answerChoice === questions[round].correctAnswer) {
  displayWinMessage();
  setTimeout(playRound, 4000);
  corGuesses++;
  round++;
} else {
  displayWrongMessage();
  setTimeout(playRound, 4000);
  incorGuesses++;
  round++;
}
};

function displayWinMessage() {
  clearBoard();
  $("#gamearea").html("<p>Excelsior!</p>");
  gameBoard.append('<p>The correct answer was ' + questions[round].correctAnswer + '</p>' + questions[round].image);
};

function displayWrongMessage() {
  clearBoard();
  $("#gamearea").html("<p>Foolish Human!</p>");
  gameBoard.append('<p>The correct answer was ' + questions[round].correctAnswer + '!</p>' + questions[round].image);
};

gameBoard.on('click', 'h6', function () {
  var choice = $(this).attr('choice');
  evaluateAnswer(choice);
});


// reset the game

// logic that displays the proper screen for right or wrong answer


});