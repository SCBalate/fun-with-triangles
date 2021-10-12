const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const outputBox = document.querySelector("#output");

const correctAnswers = [ "right angled" ,  "isosceles triangle", "equilateral triangle",  "opaque","acute", "60", "90"];

function calculateScore() {
   let score = 0;
   let index = 0; 
   const formResults = new FormData(quizForm);
   for(let value of formResults.values()){
       if(value === correctAnswers[index]){
           score = score + 1; 
       }
       index= index + 1;
   }
   
   outputBox.innerText = "Your Score is " + score;
}
submitAnswerBtn.addEventListener("click" , calculateScore);