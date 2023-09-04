console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;

// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

// Function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        console.log(boxtext[e[0]].innerHTML)
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = " Won"
            document.querySelector('.turnText').innerText = boxtext[e[0]].innerText
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "300px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
    })
}

// Game Logic
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            element.classList.add('clicked'); // Add the 'clicked' class
            document.querySelector('.turnText').classList.add('clicked'); // Add the 'clicked' class
            
            setTimeout(() => {
                element.classList.remove('clicked'); // Remove the 'clicked' class after the animation duration
                document.querySelector('.turnText').classList.remove('clicked');
            }, 3000);
            element.style.backgroundColor='#e3d5ca'
            if(turn=== 'X'){
                boxtext.style.color='red';
                
            }
            else{
                boxtext.style.color='blue';

            }
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover){
                let turnText= document.querySelector(".turnText");  
                turnText.innerText=  turn;
                if(turn=== 'X'){

                    turnText.style.color='red';
                }
                else{
                    turnText.style.color='blue';

                }
                
             } 
        }
    })
})

// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
        element.parentNode.style.backgroundColor='transparent';
        // element.style.backgroundColor='yellow';
    });
    turn = "X"; 
    isgameover = false
    document.querySelector(".line").style.width = "0vw";
    document.querySelector(".info").innerText  = "Turn for ";
    document.querySelector(".turnText").innerText  =  turn;
    document.querySelector(".turnText").style.color  ='red';
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})

