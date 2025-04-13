let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const gencomchoice=()=>{
    const option=["rock","paper,","scissor"];
    const randidx=Math.floor(Math.random()*3);
    return option[randidx];
    };
    const drawgame=()=>{
      
        msg.innerText="game was draw";
        msg.style.backgroundColor="purple";
    };
    const showwinner=(userwin,userchoice,computerchoice)=>{
        if(userwin) {
            userscore++;
        userScorePara.innerText=userscore
        {
          
            msg.innerText=`you win ${userchoice} beats your ${computerchoice}`;
            
            msg.style.backgroundColor="green";
        }}
        else {
            compscore++;
            compScorePara.innerText=compscore
           
            msg.innerText=`you lose ${computerchoice} beats ${userchoice}`;
            msg.style.backgroundColor="red";
         }
    }

    const playgame=(userchoice)=>{
    
    const computerchoice= gencomchoice();
    
    if(userchoice==computerchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=computerchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userwin=computerchoice==="scissor"?false:true;
        }
        else{
           userwin= computerchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,computerchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log(userchoice);
        playgame(userchoice);
     
    });
});