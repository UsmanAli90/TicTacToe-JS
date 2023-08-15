console.log("Welcome")
let audioturn=new Audio('woosh.mp3')
let gameover=new Audio('winsound.mp3')
let turn="X";
let over=false;
//function to change turn
const changeTurn=()=>{
    return turn==="X"? "O":"X";
}

//function to check for win
const checkwin=()=>{
    let boxtext=document.getElementsByClassName('boxtext')
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText!=="")){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText + " Won"
            gameover.play();
            over=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="186px"
        }

    })

}
//Main Game part

let boxes=document.getElementsByClassName('box')
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext')
    element.addEventListener('click',(e)=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            audioturn.play();
           turn= changeTurn();
           audioturn.play();
            checkwin();
            if(!over){
                document.getElementsByClassName('info')[0].innerText="Turn for "+ turn;
            }

        }
    })
})


//Reset button Click

reset.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll('.boxtext')
    Array.from(boxtext).forEach(element=>{
        element.innerText=""
    })
    turn="X";
    over=false;
    document.getElementsByClassName('info')[0].innerText="Turn for "+ turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"   
})

