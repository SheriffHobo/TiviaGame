$(function () {

  // Various containers
  var round = 0;
  var timeLeft = 15;
  var interval;
  var corGuesses = 0;
  var incorGuesses = 0;
  var gameBoard = $('#gamearea');
  var questions = [
    {
      question: "From which planet do the Transformers originate?",
      choices: ["Cybertron", "Earth", "Junkion", "Quintessa"],
      correctAnswer: "Cybertron",
      image: "<img src='assets/images/cybertronanswer.jpg' class='img-circle'>"
    },
    {
      question: "Finish this song lyric: 'You've got the touch, you've got the _ '",
      choices: ["Power", "Will", "Strength", "Heart"],
      correctAnswer: "Power",
      image: "<img src='assets/images/matrixanswer.jpg' class='img-circle'>"
    },
    {
      question: "Before he became Rodimus Prime, he was known as...?",
      choices: ["KITT", "Hot Rod", "Mirage", "Air Wolf"],
      correctAnswer: "Hot Rod",
      image: "<img src='assets/images/hotrodanswer.jpg' class='img-circle'>"
    },
    {
      question: "Who was the first female Transformer to appear in the cartoon?",
      choices: ["Elita One", "Firestar", "Arcee", "Nautica"],
      correctAnswer: "Arcee",
      image: "<img src='assets/images/arceeanswer.jpg' class='img-circle'>"
    },
    {
      question: "In Beast Wars, Megatron is protrayed as a _ ?",
      choices: ["Stegosaurus", "Triceratops", "Tyrannosaurus Rex", "Velociraptor"],
      correctAnswer: "Tyrannosaurus Rex",
      image: "<img src='assets/images/megatronanswer.jpg' class='img-circle'>"
    },
    {
      question: "Scatman Crothers is known for voicing this Transformer?",
      choices: ["Rumble", "Blurr", "Black Arachnia", "Jazz"],
      correctAnswer: "Jazz",
      image: "<img src='assets/images/jazzanswer.jpg' class='img-circle'>"
    },
    {
      question: "Which of these Transformers is a Combiner?",
      choices: ["Skytrain", "Devastator", "Scourge", "Beta"],
      correctAnswer: "Devastator",
      image: "<img src='assets/images/devastatoranswer.jpg' class='img-circle'>"
    },
    {
      question: "Transformers 'borrowed' this character design from the Anime 'Macross'.",
      choices: ["Ramjet", "Starscream", "Thrust", "Jetfire"],
      correctAnswer: "Jetfire",
      image: "<img src='assets/images/jetfireanswer.jpg' class='img-circle'>"
    }];

  // Start the game
  $("#start").click(playRound);

  // Reset display for each new round
  function playRound() {
    clearBoard();
    showQuestion();
    displayAnswerChoices();
  }

  function clearBoard() {
    gameBoard.empty();
  };

  // Display Qs and As
  function showQuestion() {
    $("#gamearea").html('<p>You have <span id=\'time\'>15</span> seconds to answer</p>');
    timeLeft = 15;
    interval = setInterval(function() {
      timeLeft--; 
      $("#time").text(timeLeft);
      if(timeLeft === 0) {
        clearInterval(interval);
        displayTimeoutMessage();
        setTimeout(playRound, 4000);
        incorGuesses++;
        round++;
      }
    }, 1000);
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

  // Evaluate answers
  function evaluateAnswer(answerChoice) {
    if (answerChoice === questions[round].correctAnswer) {
      displayWinMessage();
      setTimeout(playRound, 4000);
      corGuesses++;
      round++;
    } else if (answerChoice !== questions[round].correctAnswer) {
      displayWrongMessage();
      setTimeout(playRound, 4000);
      incorGuesses++;
      round++;
    }
  };

  // Messages to display
  function displayWinMessage() {
    clearBoard();
    $("#gamearea").html("<p>Excelsior!</p>");
    $("#gamearea").append('<p>The correct answer was ' + questions[round].correctAnswer + '</p>' + questions[round].image);
  };

  function displayWrongMessage() {
    clearBoard();
    $("#gamearea").html("<p>Foolish Human!</p>");
    $("#gamearea").append('<p>The correct answer was ' + questions[round].correctAnswer + '!</p>' + questions[round].image);
  };

  function displayTimeoutMessage() {
    clearBoard();
    $("#gamearea").html("<p>You have run out of time!</p>");
    $("#gamearea").append('<p>The correct answer was ' + questions[round].correctAnswer + '!</p>' + questions[round].image);
  };

  function displayScore() {
    clearBoard();
    $("#gamearea").html("<p>Game Over</p>");
    $("#gamearea").html('<p>Correct answers:</p> ' + corGuesses);
    $("#gamearea").html('<p>Inorrect answers:</p> ' + incorGuesses);
  };

  // Click listener
  gameBoard.on('click', 'h6', function () {
    var choice = $(this).attr('choice');
    evaluateAnswer(choice);
  });

  // Need Timer

  // Need Score Page

  // Need way to display score/reset page


});