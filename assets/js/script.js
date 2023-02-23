

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

var quizArea = document.getElementById('quiz');
var submitBtn = document.getElementById('#submitBtn');
var showAnswer = document.getElementById('showAnswer');
var startQuizBtn = document.querySelector('startQuiz');
var timerHTML = document.querySelector('timercount')
//Default state for start quiz button
var isStartQuizBtn = 'hidden';

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
  //This is a 'for each' getter statement 
  questions.forEach((element,choices) =>
    //console.log(element.choices)
    showChoices.push(choices[''])
  );
  console.log(showChoices)

  console.log(document.body.children);
  //Show submit answer button
  startQuizBtn.style.visibility = 'visible';
  
  for (i=0 ; i<questionCount; i++) {
    showChoices.push(questions[i].choices);
      console.log(showChoices);
      //answer.push('<label><input type='radio'name='question+i''questions[i].choices[i]'</label>');
      //if the submit button hasnt been clicked, end for loop
      if (!showAnswer){
        return;
      }

  };
  console.log(show);

  //timer function counts down from 100 seconds and decrements when an incorrect answer is given
    function timer(){
      
      //Time count is stored in this variable
      var timeInterval = setInterval(function(){
        timerCount--;
        
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
  quizArea.innerText = answer;

};

//An alert to the user that their answer is correct or incorrect
function showAnswer(event) {
  if(correctAnswer.check){
    alert("Correct")
  }
};


//When user clicks submit answer button, the function will verify the choice
//submitBtn.addEventListener('click', showAnswer);
//When user clicks start quiz, 'submit answer' button is unhidden, timer starts and question is built 
startQuizBtn.addEventListener('click', showQuestion);