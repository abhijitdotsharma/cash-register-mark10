const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const noOfNotes = document.querySelectorAll(".number-of-notes")
const buttonCheck = document.querySelector('#check-btn');

const notes = [2000, 500, 100, 20, 10, 5, 1]

function calculateChange(difference){ //differene = 100
    //difference / 2000, difference % 2000 
    let numNotes;
    for(let i=0,len = notes.length; i < len; i++){
        numNotes = Math.trunc(difference/notes[i]) 
        //numNotes = 100/2000 -> 0
        //numNotes = 100 / 500 -> 0
        difference = difference % notes[i] 
        // difference = 100 % 2000 -> 100
        //difference = 100 % 500 -> 100

        noOfNotes[i].innerText = numNotes
        //noOfNotes[2000] = 0
        //noOfNotes[500] = 0
    }

}

buttonCheck.addEventListener('click', function(){
    let cashMinusBill;
    
    //bill > 0 
        //bill < cash
    if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value){
            cashMinusBill = cashGiven.value - billAmount.value;
            calculateChange(cashMinusBill);
        }else{
            console.log("Cash is lower than bill, you broke as hell!!")
        }
    }else{
        console.log("Enter a valid bill amount!")
    }


})