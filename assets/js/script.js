

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
  var show = [];
  var answer = [];
  //stores check against answer that is picked
  var questionCount = 4;
  
  questions.forEach((element,choices) =>
    //console.log(element.choices)
    answer.push(choices)
  );
  console.log(answer)
  
  for (i=0 ; i<questionCount; i++) {
      show.push(questions[i].choices);
      console.log(show);
      //answer.push('<label><input type='radio'name='question+i''questions[i].choices[i]'</label>');
      //if the submit button hasnt been clicked, end for loop
      if (!showAnswer){
        return;
      }

  };
  console.log(show);
  quizArea.innerText = answer;
  

}

function showAnswer(event) {
  if(correctAnswer.check){
    alert("Correct")
  }
}

//Call the function that shows the question
showQuestion();
submitBtn.addEventListener('click', showAnswer);