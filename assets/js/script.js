//When starting the quiz, it must be started when the 'Start Quiz button is clicked

//Function fpr counting down when a new question is shown
//Function for handling when a choice is clicked
//--Once choice is clicked you must check if the question is correct
//--If answer is correct it must move to the next question
//--If incorrect it must say Wrong! at the bottom of the page
//Once a question is completed the page must go to the next question
//After several questions are completed the end of the quiz will say 
//--'All done!' 
//--Show your final score 
//--You can enter you initials  
//--Then, print the top scores like a leaderboard
//--This data for scores will be stored in local memory
//--You must also be able to clear the scoreboard

var questionArea = document.getElementById('question');
var quizArea = document.getElementById('quiz');
var submitBtn = document.getElementById('submitBtn');
var showAnswer = document.getElementById('showAnswer');
var startQuizBtn = document.getElementById('startQuiz');
var timerHTML = document.querySelector('.timerCount')
var questionIndex = 0;


var questions = [
  {
    question: 'An equality operator is a logic test operator you can use in Javascript, which one of the below is a "strict" operator?',
    choices: {
      a: '====',
      b: '&&',
      c: '=',
      d: '===',
    },
    correctAnswer: 'd'
  },
  {
    question: 'What is a best practice you can do to make your code more accesible?',
    choices: {
      a: 'Indent as little as you can',
      b: 'Do not use brackets in your code',
      c: 'Capitalize all of your variables',
      d: 'Comment out your code'
    },
    correctAnswer: 'd'
  },
  {
    question: 'What operator do you have to add at the end of Javascript statements?',
    choices: {
      a: ':',
      b: '.',
      c: ';',
      d: '=',
    },
    correctAnswer: 'c'
  },
  {
    question: 'What is an object?',
    choices: {
      a: 'A type of website',
      b: 'A datatype that can store complex data',
      c: 'A type of operator',
      d: 'A method within Javascript',
    },
    correctAnswer: 'b'
  }
];

console.log(questions);
console.log(questions[0]);
console.log(questions[0].choices['a']);



function showQuestion(){
  //Pull and print question piece by piece
  //Show Answers
  //We can access the questions array using dot notation
  //This stores the answer choices
  var showChoices = [];
  var answer = [];
  //This stores the timer at default time, 100 seconds
  var timerCount = 100;

  //stores check against answer that is picked
  var questionCount = 4;
 
  var showChoices = questions[questionIndex].choices
  var currentQuestion = questions[questionIndex].question
  
  console.log(showChoices)
  console.log(currentQuestion)

  console.log(document.body.children);
  //Hide start quiz button
  startQuizBtn.style.visibility = 'hidden';
  //Show submit answer button
  submitBtn.style.visibility = 'visible';
  
  for (var key in showChoices) {
    
      answer.push("<label>"+showChoices[key]+"</label><input type='radio' name='question' value='"+showChoices[key]+"'>");
      //if the submit button hasnt been clicked, end for loop
  /*      if (!showAnswer){
        return;
      }
*/
  };
  console.log(answer);

  //timer function counts down from 100 seconds and decrements when an incorrect answer is given
    function timer(){
      timerHTML.textContent = timerCount;
      //Time count is stored in this variable
      var timeInterval = setInterval(function(){
        timerCount--;
        timerHTML.textContent = timerCount;
        if (timerCount === 0){
          //Clears timer count 
          clearInterval(timeInterval)
          //Prints to page when time runs out
          alert('You have run out of time')
        } 
      }, 1000);
  }
  //Then call to start countdown
  timer();
  //Returns text to the quiz area after quiz is built
  questionArea.innerHTML = currentQuestion;
  quizArea.innerHTML = answer.join(' \n');

};

//An alert to the user that their answer is correct or incorrect
function showAnswer() {
  if(correctAnswer.check){
    alert("Correct")
  }
};


//When user clicks submit answer button, the function will verify the choice
//submitBtn.addEventListener('click', showAnswer);
//When user clicks start quiz, 'submit answer' button is unhidden, timer starts and question is built 
startQuizBtn.addEventListener('click', showQuestion);
//Event listener for submitting your answer to be checked
submitBtn.addEventListener('click', showAnswer);