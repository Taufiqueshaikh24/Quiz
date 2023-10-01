let index = 0
let span = document.querySelector('.Qn'); 
let question = document.querySelector('.quiz');
let options = document.querySelectorAll('.Quiz');
let time = document.querySelector('.timer');
let btn = document.querySelector('.btn');
let right = 0 ;
let wrong = 0 ;









let questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        b:'<scripting>', 
        a:'<script>', 
        c:'<Js>', 
        d:'<JavaScript>',
        correct:'b'
    },
    {
        question: 'Where is the correct place to insert a JavaScript?',
        c:'  Both the head section and the body section are correct', 
        b:' The body section', 
        a:' The head section', 
        d:'None of these',
        correct: 'a'
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        c:'<script name="xxx.js">', 
        b:'<script href="xxx.js">', 
        a:'<script src="xxx.js">', 
        d:'<script link="xxx.js">',
        correct: 'c' 
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        c:' alert("Hello World")', 
        b:' alertBox("Hello World");', 
        a:' msgBox("Hello World")', 
        d:' msg("Hello World");',
        correct: 'a'  
    },
    {
        question: 'How do you create a function in JavaScript?',
        a:' function = myFunction()', 
        b:' function:myFunction()', 
        c:' function myFunction()', 
        d:' functin == Myfunction',
        correct:'c'
    },
    {
        question: 'How do you create a function in JavaScript?',
        a:' function = myFunction()', 
        b:' function:myFunction()', 
        c:' function myFunction()', 
        d:' functin == Myfunction',
        correct:'c'
    }
]



function UI(e){
    e.preventDefault();
  let questionss = questions[index]
  question.innerHTML = `${index + 1 }) ${questionss.question}`
  options[0].nextElementSibling.innerText = questionss.a;
  options[1].nextElementSibling.innerText = questionss.b;
  options[2].nextElementSibling.innerText = questionss.c;
  options[3].nextElementSibling.innerText = questionss.d;
  index = index + 1; 
  
 
}







const getAnswer = (e) => {
    e.preventDefault();
    let questionss = questions[index];
        options.forEach( r => {
             if (r.checked) {
             console.log(`checked ${r.value}`);
              let  answer = r.value
                console.log('this is answer' , answer);
                console.log(questionss.correct);
                if (answer === questionss.correct) {
                    console.log('Right');
                    right = right +  1 
                }else {
                     console.log('Wrong');
                     wrong = wrong + 1 
                }
            }    
            if (index == 5 ) {
               ResultUI()
            }  
        })

        console.log(right);
        console.log(wrong);
}











let ResultUI = () => {
    let data = questions[index]
    document.body.innerHTML = `
        <h1>Right:${right}</h1>
        <h1>Wrong:${wrong}</h1><hr>

        1) Inside which HTML element do we put the JavaScript?

Ans:&ltscript&gt
<hr>
2) Where is the correct place to insert a JavaScript?
Ans:Both the head section and the body section are correct
<hr>
3) What is the correct syntax for referring to an external script called "xxx.js"?
Ans:&ltscript src="xxx.js"&gt
<hr>
4) How do you write "Hello World" in an alert box?
Ans:alert("Hello World")
<hr>
5) How do you create a function in JavaScript?
Ans:function myFunction()
<hr>





   `
    
}







btn.addEventListener('click' , getAnswer);
btn.addEventListener('click' ,    UI);
btn.addEventListener('submit'  , ResultUI)
document.addEventListener('DOMContentLoaded' , UI);
