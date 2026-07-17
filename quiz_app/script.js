const question = document.querySelector(".question");
const options = document.querySelector(".options");
const optionOne = document.getElementById("optionOne");
const optionTwo = document.getElementById("optionTwo");
const optionThree = document.getElementById("optionThree");
const optionFour = document.getElementById("optionFour");

let questionCount=0;
let score=0;

const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Transfer Markup Language",
      "Home Tool Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which language is used to style web pages?",
    options: ["HTML", "CSS", "Java", "Python"],
    answer: "CSS",
  },
  {
    question:
      "Which programming language is mainly used for web interactivity?",
    options: ["Python", "JavaScript", "C++", "PHP"],
    answer: "JavaScript",
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: "<a>",
  },
  {
    question: "Which CSS property changes the text color?",
    options: ["font-color", "text-color", "color", "background-color"],
    answer: "color",
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "Apple"],
    answer: "Netscape",
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["<!-- -->", "//", "#", "**"],
    answer: "//",
  },
  {
    question: "Which method is used to print something in the browser console?",
    options: [
      "console.print()",
      "console.log()",
      "print()",
      "document.write()",
    ],
    answer: "console.log()",
  },
  {
    question: "Which keyword is used to declare a constant in JavaScript?",
    options: ["var", "let", "const", "static"],
    answer: "const",
  },
  {
    question: "Which HTML element is used to display the largest heading?",
    options: ["<h6>", "<head>", "<h1>", "<heading>"],
    answer: "<h1>",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  loadQuestion();
});

function loadQuestion() {
  question.textContent = quizData[questionCount].question;
  optionOne.textContent = quizData[questionCount].options[0];
  optionTwo.textContent = quizData[questionCount].options[1];
  optionThree.textContent = quizData[questionCount].options[2];
  optionFour.textContent = quizData[questionCount].options[3];
}

function checkScore(selectedAnswer){
  if(selectedAnswer === quizData[questionCount].answer){
    score++;
  }
  questionCount++;

  if(questionCount <quizData.length){
    loadQuestion();
  }
  else{
    question.innerHTML= `Quiz Completed!! <br><hr> Your score is ${score}/${quizData.length}`;

    optionOne.style.display='none';
    optionTwo.style.display='none';
    optionThree.style.display='none';
    optionFour.style.display='none';
  }
}

optionOne.addEventListener('click', ()=>{
  checkScore(optionOne.textContent)
})
optionTwo.addEventListener('click', ()=>{
  checkScore(optionTwo.textContent)
})
optionThree.addEventListener('click', ()=>{
  checkScore(optionThree.textContent)
})
optionFour.addEventListener('click', ()=>{
  checkScore(optionFour.textContent)
})