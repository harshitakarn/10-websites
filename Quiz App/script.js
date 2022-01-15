const quizData = [
    {
        question: 'How old is Harshita?',
        a: '10',
        b: '17',
        c: '21',
        d: '110',
        correct: 'c'
    }, {
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'Javascript',
        correct: 'd'
    }, {
        question: 'Who is the President of US?',
        a: 'Harshita Karn',
        b:'Donald Trump',
        c:'Hillary Clinton',
        d:'Kamala Harris',
        correct: 'b'
    }, {
        question: 'What does HTML stand for?',
        a: 'Hypertext markup language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Helicopters Terminals Motorboats Lamborginis',
        correct: 'a'
    }, {
        question: 'What year was JavaScript launched?',
        a: '1995',
        b: '1996',
        c: '1994',
        d: 'none of the above',
        correct: 'd'
    }
];

const quiz= document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById ("submit");

let currentQuiz = 0;
let score = 0;


 loadQuiz();

 function loadQuiz() {
     deselectAnswers();
     const currentQuizData = quizData[currentQuiz];

     questionE1.innerText = currentQuizData.question; 
     a_text.innerText = currentQuizData.a;
     b_text.innerText = currentQuizData.b;
     c_text.innerText = currentQuizData.c;
     d_text.innerText = currentQuizData.d;
 }

 function getSelected() {
    let answer = undefined;

     answerEls.forEach( (answerE1) => {
        //  console.log(answer.checked);
        if(answerE1.checked) {
           answer = answerE1.id;
        }

     });
     return answer;
 }

 function deselectAnswers()  {
    answerEls.forEach( (answerE1) => {
        answerE1.checked = false;
 });
}

 submitBtn.addEventListener("click", () => {
    //  check to see the answer
    const answer =  getSelected();
   
    if(answer)
    {
        if (answer === quizData[currentQuiz].correct) 
        {
            score++;
    }
    
    currentQuiz++;
     if (currentQuiz < quizData.length) {
         loadQuiz();
     } else {
         quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>`;
     }
    }

    });     



