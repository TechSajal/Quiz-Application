const correctanswer = [ "C","B","A","D","B"];
const form = document.querySelector(".quiz-form")
const ques = document.querySelectorAll(".question");
const result = document.querySelector(".result")
form.addEventListener("submit",event=>{
       event.preventDefault();
       let score =0;
       const answers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value];
       answers.forEach((answer,index) =>{
          if(answer === correctanswer[index]){
             ques[index].classList.add("correct");
             score++; 
          }else{
            ques[index].classList.add("wrong");
          }
          
       });
       
       result.querySelector("p").textContent = `Your score is ${score}/5`
       result.classList.remove("hide");
       scrollTo(0,0);
});