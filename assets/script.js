const quizContEl = document.getElementById("quizContainer")
const displayScEl= document.getElementById("displayScore");
quizContEl.style.display="none";
displayScEl.style.display="none";
const startButtonEl= document.querySelector(".button-start")
const answerEl=document.getElementById("answer");

var questionsDb = [
    {
        question:"What is React? ",
        option1: "Bachend framework",
        option2:"Front-end framework",
        option3:"Another name for Angular",
        option4:"Another name for Vue.js",
        answer:"Front-end framework"
    },
    {
        question:"What is React? ",
        option1: "Bachend framework",
        option2:"Front-end framework",
        option3:"Another name for Angular",
        option4:"Another name for Vue.js",
        answer:"Front-end framework"
    },
    {
        question:"What is React? ",
        option1: "Bachend framework",
        option2:"Front-end framework",
        option3:"Another name for Angular",
        option4:"Another name for Vue.js",
        answer:"Front-end framework"
    },
    {
        question:"What is Angular? ",
        option1: "Bachend framework",
        option2:"Front-end framework",
        option3:"Another name for React",
        option4:"Another name for Vue.js",
        answer:"Front-end framework"
    }
]

const questionEl = document.getElementById("questions")
const option1El= document.getElementById("option1");
const option2El= document.getElementById("option2");
const option3El= document.getElementById("option3");
const option4El= document.getElementById("option4");
option1El.addEventListener("click",evaluateAnswer)
option2El.addEventListener("click",evaluateAnswer)
option3El.addEventListener("click",evaluateAnswer)
option4El.addEventListener("click",evaluateAnswer)
let currentQuestion = 0;
const timerEl = document.getElementById("timer");
var timerObj;
var timerCounter = 60;
var score =0

startButtonEl.addEventListener("click",function(event){
    event.preventDefault()
    quizContEl.style.display="block";
    startButtonEl.style.display="none";
    timerObj = setInterval(function(){
        timerEl.textContent = timerCounter;
        if(timerCounter > 0){
            timerCounter--
        }else{
            console.log("Time Up")
            endQuiz()
        }
    },1000)
    renderQuiz();
})

function renderQuiz(){
    questionEl.innerText = questionsDb[currentQuestion].question
    option1El.innerText = questionsDb[currentQuestion].option1
    option2El.innerText = questionsDb[currentQuestion].option2
    option3El.innerText = questionsDb[currentQuestion].option3
    option4El.innerText = questionsDb[currentQuestion].option4
}

function evaluateAnswer(event){
    var userAns = event.target.innerText
    console.log(userAns)
    if(userAns === questionsDb[currentQuestion].answer){
        score++;
        answerEl.textContent="Your answer is Correct";
    }else{
        timerCounter -= 5; //timerCounter-5
        answerEl.textContent="Your answer is Wrong";
    }
    if(currentQuestion < questionsDb.length-1){
        currentQuestion++;
        renderQuiz()
    }else {
        console.log("Quiz over")
        endQuiz()
    }
}

function endQuiz(){
   clearInterval(timerObj)
   quizContEl.style.display="none";
   displayScEl.style.display="block";
   document.getElementById("finalScores").innerText = "Your Total score is: "+ (timerCounter+score)
}