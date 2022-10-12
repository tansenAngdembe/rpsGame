// creatin function to get the id element
const id = (id) => document.getElementById(id);
let userChoise = id("choise"),
    bnt1 = id("firstBnt"),
    bnt2 = id("secondBnt"),
    bnt3 = id("lastBnt"),
    finalResult=id("Continar"),
    playerScore=id("yourCount"),
    computerScore=id("computerCount");

// Creating all possible choises 
let selection=[
    {
        name:"Rock",
        emoji:bnt1.innerHTML,//getting the emoji present in our button 1 element
        beates:"Secissor"
    },
    {
        name:"Paper",
        emoji:bnt2.innerHTML,//getting the emoji present in our button 2 element
        beates:"Rock"
    },
    {
        name:"Secissor",
        emoji:bnt3.innerHTML,//getting the emoji present in our button 2 element
        beates:"Paper"
    }
]
// Function that run onclick of button Step 1
let playerClick=(paramater)=>{// This paramater take the bnt value
    let mySelection=selection.find(select=>select.name===paramater);//Player selection
    makeSelection(mySelection)// passing mySelection as paramater in makeSelection function
}  
// Creating the selection mode Step 2
let makeSelection=(mySelection)=>{
    const computerChoise=random();
    const yourWin=isWinner(mySelection,computerChoise);
    const computerWin=isWinner(computerChoise,mySelection);
    result(computerChoise,computerWin)
    result(mySelection,yourWin);
    if(yourWin) increment(playerScore)// Passing playerScore in to the increment function
    if(computerWin) increment(computerScore)


}  
// Creating finall result Step 5
let result=(argAsSelection,winner)=>{
    let div=document.createElement("div");
    div.innerHTML=argAsSelection.emoji// Passing emoji in our new div element.
    div.classList.add("computerContainer")
    if(winner) div.classList.add("playerContaniner")
    finalResult.after(div)// passing our new div after the our container.


}
// function to increase the number every time 
let increment=(score)=>{// parmater that pass as playerScore and computerScore
     score.innerHTML=parseInt(score.innerHTML) + 1 // converint the innerHTML to integer
}

// Defining the winner player Step 4
let isWinner=(selection, oppenentSelection)=>{
    return selection.beates === oppenentSelection.name;   
}
// Creating function that choose selection rendomly Step 3
let random=()=>{
    let randomIndex=Math.floor(Math.random() * selection.length)
    return selection[randomIndex]
}



