const num1 = Math.ceil(Math.random()*100);//creating a random whole number
const num2 = Math.ceil(Math.random()*100);
const questionEl = document.getElementById("quiz");
questionEl.innerText = `What is ${num1} multiply by ${num2} ?`;
questionEl.style.fontSize = "30px" ;//styling the questiom
const correctAns = num1 * num2;
inputEl = document.getElementById("input");
formEl = document.getElementById("form");
scoreEl = document.getElementById("score");
let score = JSON.parse(sessionStorage.getItem("score"));
if (!score){
    score = 0;
}
scoreEl.innerHTML = `score : ${score}`;
scoreEl.style.letterSpacing = "2px";
formEl.addEventListener("submit",()=> {
    const userAns = +inputEl.value;//the users value
    if (userAns === correctAns) {
        score++
        updatesessionStorage();
    }
    else{
        score--
        updatesessionStorage();
    }
})
function updatesessionStorage(){
    sessionStorage.setItem("score" ,JSON.stringify(score))//a function that stores the score in the browser to avoid losing of the score even after refreshng the web as a string
}
bodyEl = document.querySelector("body");
bodyEl.addEventListener(
    "mousemove", (event)=> {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    const size = Math.ceil(Math.random()*100);
    spanEl.style.height = size + "px";
    spanEl.style.width = size + "px"; 
    bodyEl.appendChild(spanEl);
    setTimeout(() => {
        spanEl.remove();
    },3000);
    }
);


//how to create an onload event?