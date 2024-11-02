const game = document.getElementById('game');
const items = game.querySelectorAll('.item');
const pin = [document.getElementById('p1Score'),document.getElementById('p2Score')];
const win = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
const player = document.getElementById('player')

let pScore = [0,0];
let players = ['X',"0"];

let IVAN = true;
let dat=['','','','','','','','',''];

function checkWin(){
    for(let i = 0; i < win.length; i++){
        let PAXA = true;
        for(let j = 0; j < win[i].length; j++){
            if(dat[win[i][j]-1] != players[IVAN?0:1]){
                PAXA=false;
                break;
            }
        }
        if(PAXA){
            return PAXA; 
        }
    }
}

function hy(){
    pScore[IVAN?0:1] += 1;
    pin[IVAN?0:1].innerText = pScore[IVAN?0:1];
     if(IVAN){
            player.innerText = 'победил X'
        }
        else{
            player.innerText = 'победил 0'
        }

}

function clear(){
    for(item of items){
        item.innerText = '';
    }
    IVAN= true;
}

game.addEventListener('click',function(event){
    if(event.target.classList[0] == 'item'&& event.target.innerText == '' && (player.innerText == 'X' || player.innerText == "0")){
        event.target.innerText = players[IVAN ? 0:1];
        for(let i = 0; i < items.length; i++){
            dat[i] = items[i].innerText;
        }
        let a = checkWin();
        if(a){
            hy();
        }
        else{
            if(!IVAN){
                player.innerText = 'X'
            }
            else{
                player.innerText = '0'
            }
            IVAN = !IVAN;
        }
    }
})

document.getElementById('restart').addEventListener('click',function(event){
    clear();
    player.innerText = 'X'
})

document.getElementById('clear').addEventListener('click',function(event){
    pScore[0]=0;
    pScore[1]=0;
    pin[0].innerText=0;
    pin[1].innerText=0;
    clear();
    player.innerText = 'X'
})