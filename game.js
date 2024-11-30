let playerOne = document.querySelector(".playerOne");
let inputOne = document.querySelector(".inputOne");
let btnOne = document.querySelector(".btn_1");
let erorrMg = document.querySelector(".erorrMg")
let PR_chance = document.querySelector(".PR_chance")

let playerTwo = document.querySelector(".playerTwo");
let PR_Two = document.querySelector(".PR_Two");
let inputTwo = document.querySelector(".inputTwo");
let erorrMg1 = document.querySelector(".erorrMg1");
let btnTwo = document.querySelector(".btn_2");

let count = 5;

btnOne.addEventListener("click",()=>{
    if(!inputOne.value){
      erorrMg.innerHTML="Enter value asign";
      
        
    }else if(isNaN(inputOne.value)){
        erorrMg.innerHTML="Enter a number"
        inputOne.value=""
       
    }else if(!(inputOne.value <=10 && inputOne.value >=0)){
         erorrMg.innerHTML="Enter a Number 1 to 10"
    }else{
       playerOne.style .display="none";
       playerTwo.style .display="inline-block";
       PR_chance.style .display="block";
       PR_chance.innerHTML=`Chance: ${count}`
       erorrMg.innerHTML=""
       

    }
})

btnTwo.addEventListener("click",()=>{
    if(!inputTwo.value){
      erorrMg1.innerHTML="Enter value asign"
        
    }else if(isNaN(inputTwo.value)){
        erorrMg1.innerHTML="Enter a number"
        inputTwo.value=""
    }else if(!(inputTwo.value <=10 && inputTwo.value >=0)){
         erorrMg1.innerHTML="Enter a Number 1 to 10"
    
    }else{
         erorrMg1.innerHTML=""
         
        if(count>1){
            count--
            PR_chance.innerHTML=`Chance: ${count}`
                if(inputOne.value == inputTwo.value){
                    PR_Two.innerHTML ="Player Two Winner"
                    btnTwo.style.display="none"
    
                 }
           
        }else{
            count=0;
            PR_chance.innerHTML=`Chance: ${count}`
            PR_Two.innerHTML ="Player One Winner"
             btnTwo.style.display="none"
              inputTwo.value=""

        }
    }
   
   
})
