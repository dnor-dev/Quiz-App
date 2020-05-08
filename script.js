
var Results = document.querySelector('.results');

let Remarks = document.querySelector('.remarks');
let ScoreRemarks = document.querySelector('#scoreRemarks');
var Containment = document.querySelector('.containment')


const options = document.querySelector(".options").children;
const question = document.querySelector(".Question");
const statement = document.querySelector(".statement");
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const option4 = document.querySelector(".option4");


var tablePoints = document.querySelectorAll("#tableScore");
var pointQuestion = document.querySelectorAll(".pointQuestion");

const nextQuestion = document.getElementById("nextQuestion");
var score = 0;

let index = 0;
let questionIndex;

let myArray = [];

const questions = [
  {
    q: "What is the full meaning of HTML?",
    options: [
      "a). HyperText Makeup Language",
      "b). HypeText Makeup Language",
      "c). HyperText Markup Language",
      "d). HyperTransfer Makeup Language",
    ],
    answer: 2,
  },
  {
    q: "How do you create a function in javascript?",
    options: [
      "a). functionInitiate",
      "b). initiateFunction()",
      "c). initiateFunctionName()",
      "d). function functionName()",
    ],
    answer: 3,
  },
  {
    q: "What is the full meaning of CSS?",
    options: [
      "a). Central Style System",
      "b). Cascading Style Sheet",
      "c). Constant Spread Sheet",
      "d). Cascading System Sheet",
    ],
    answer: 1,
  },
  {
    q: "Which of these is not an IDE?",
    options: [
      "a). Sublime Text ",
      "b). IntelliJ",
      "c). Visual Studio",
      "d). NetBeans",
    ],
    answer: 0,
  },
  {
    q: "Which of these languages is responsible for the functional interaction of the web?",
    options: [
      "a). PHP",
      "b). Java",
      "c). C++",
      "d). JavaScript",
    ],
    answer: 3,
  },
];

function load() {
  if (questionIndex === 0) {
    question.innerHTML = `Question 1 of 5`;
  } else if (questionIndex === 1) {
    question.innerHTML = `Question 2 of 5`;
  } else if (questionIndex === 2) {
    question.innerHTML = `Question 3 of 5`;
  } else if (questionIndex === 3) {
    question.innerHTML = `Question 4 of 5`;
  } else {
    question.innerHTML = `Question 5 of 5`;
  }
  statement.innerHTML = questions[questionIndex].q;
  option1.innerHTML = questions[questionIndex].options[0];
  option2.innerHTML = questions[questionIndex].options[1];
  option3.innerHTML = questions[questionIndex].options[2];
  option4.innerHTML = questions[questionIndex].options[3];

  index++;
}

function randomQuestion() {
  let randomNumber = Math.floor(Math.random() * questions.length);
  let hitduplicate = 0;
  if (index == questions.length) {
    quizOver();
  } else {
    if (myArray.length > 0) {
      for (i = 0; i < myArray.length; i++) {
        if (myArray[i] == randomNumber) {
          hitduplicate = 1;
          break;
        }
      }
      if (hitduplicate == 1) {
        randomQuestion();
      } else {
        questionIndex = randomNumber;
        load();
      }
    }
    if (myArray.length == 0) {
      questionIndex = randomNumber;
      load();
    }
    myArray.push(randomNumber);
  }
}

window.onload = function () {
  randomQuestion();
};

function check(element) {
  if (element.id == questions[questionIndex].answer) {
    element.classList.add("green-correct");
    score++;
    tablePoints[questionIndex].innerHTML = `1 point`;
    if (questionIndex === 0) {
      pointQuestion[questionIndex].innerHTML = `1`;
    } else if (questionIndex === 1) {
      pointQuestion[questionIndex].innerHTML = `2`;
    } else if (questionIndex === 2) {
      pointQuestion[questionIndex].innerHTML = `3`;
    } else if (questionIndex === 3) {
      pointQuestion[questionIndex].innerHTML = `4`;
    } else {
      pointQuestion[questionIndex].innerHTML = `5`;
    }
  } else {
    element.classList.add("red-wrong");
    tablePoints[questionIndex].innerHTML = `0 point`;
    if (questionIndex === 0) {
      pointQuestion[questionIndex].innerHTML = `1`;
    } else if (questionIndex === 1) {
      pointQuestion[questionIndex].innerHTML = `2`;
    } else if (questionIndex === 2) {
      pointQuestion[questionIndex].innerHTML = `3`;
    } else if (questionIndex === 3) {
      pointQuestion[questionIndex].innerHTML = `4`;
    } else {
      pointQuestion[questionIndex].innerHTML = `5`;
    }
  }

  disableOptions();
}

function disableOptions() {
  for (i = 0; i < options.length; i++) {
    options[i].classList.add("disabled");
    if (options[i].id == questions[i].answer) {
      options[i].classList.add("green-correct");
    }
  }
}

function enableOptions() {
  for (i = 0; i < options.length; i++) {
    options[i].classList.remove("disabled", "green-correct", "red-wrong");
  }
}
function validate() {
  if (!options[0].classList.contains("disabled")) {
    alert("Please select an option");
  } else {
    randomQuestion();
    enableOptions();
  }
}
function quizOver() {
  Containment.style.display = "flex";
  if (score == 0 || score == 1){
    Remarks.innerHTML = `Please help Yourself &#128548`
    ScoreRemarks.innerHTML = `How can you score ${score} out of 5 questions?`
  }else if (score == 2){
    Remarks.textContent = `Fair &#128530`
    ScoreRemarks.innerHTML = `You scored ${score} out of 5 questions`
  }else if (score == 3){
    Remarks.innerHTML =   `Good,you can do better.&#128526`
    ScoreRemarks.innerHTML = `You scored ${score} out of 5 questions`
  }else{
    Remarks.innerHTML = `Congrats! &#128515;`
    ScoreRemarks.innerHTML = `You scored ${score} out of 5 questions!`
  }
 
}

nextQuestion.addEventListener("click", function () {
  validate();
  console.log()

});
