const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];


let qus=document.getElementById("question")
let op=document.querySelectorAll(".option")
let index=0;
let total=quizData.length;
let right=0, wrong=0;

let loadQuestion=()=>{

    if (index===total){
        return quizEnd()
    }
    reset()
    let data=quizData[index]
    console.log(data)
    qus.innerText= `${index+1}) ${data.question}`
    console.log(op)
    op[0].nextElementSibling.innerText=data.a;
    op[1].nextElementSibling.innerText=data.b;
    op[2].nextElementSibling.innerText=data.c;
    op[3].nextElementSibling.innerText=data.d;

}

let submitQuiz=()=>{
    let data=quizData[index];
    ans=getAnswer();
    if(ans===data.correct){
        right++
    }else{
        wrong++
    }
    index++;
    loadQuestion();
    return;
}

// another way of event listening
// document.querySelector("#submit").addEventListener(
//     "click",
//     function() {
//         let data = quizData[index]
//         let ans = getAnswer()
//         if (ans === data.right) {
//             right++;
//         } else {
//             wrong++;
//         }
//         index++;
//         loadQuestion()
//     }
// )

const getAnswer=()=>{
    let answer;
    op.forEach(
        (input)=>{
            if (input.checked){
                answer= input.value;
                
            }
        }
    )
    return answer;
}

let reset = () => {
    op.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const quizEnd = () => {
    // // console.log(document.getElementsByClassName("container"));
    // document.getElementsByClassName("container")[0].innerHTML = `
    //     <div class="col">
    //         <h3 class="w-100"> Hii, you've scored ${right} / ${total} </h3>
    //     </div>
    // `

    document.getElementById("box").innerHTML=
    `<h3>Thank You For Playing</h3>
    <h2>${right}/${total} are correct</h2>`
}
//initial call
loadQuestion()