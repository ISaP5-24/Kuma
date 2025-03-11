const game = document.getElementById('game');
const items = game.querySelectorAll('.item');
const pin = [document.getElementById('p1Score'),document.getElementById('p2Score')];
const win = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
const player = document.getElementById('player')

let schetchik = true;
let pScore = [0,0];
let players = ['X',"0"];
let dat=['','','','','','','','',''];

function checkWin(){
    for(let i = 0; i < win.length; i++){
        let winner = true;
        for(let j = 0; j < win[i].length; j++){
            if(dat[win[i][j]-1] != players[schetchik?0:1]){
                winner=false;
                break;
            }
        }
        if(winner){
            return winner; 
        }
    }
}

function hy(){
    pScore[schetchik?0:1] += 1;
    pin [schetchik ? 0 : 1].innerText = pScore [schetchik ? 0 : 1];
     if(schetchik){
            player.innerText = 'Победили Крестики'
        }
        else{
            player.innerText = 'Победили Чполики'
        }

}

function clear(){
    for(item of items){
        item.innerText = '';
    }
    schetchik= true;
}

game.addEventListener('click',function(event){
    if(event.target.classList[0] == 'item'&& event.target.innerText == '' && (player.innerText == 'X' || player.innerText == "0")){
        event.target.innerText = players[schetchik ? 0:1];
        for(let i = 0; i < items.length; i++){
            dat[i] = items[i].innerText;
        }
        let a = checkWin();
        if(a){
            hy();
        }
        else{
            if(!schetchik){
                player.innerText = 'X'
            }
            else{
                player.innerText = '0'
            }
            schetchik = !schetchik;
        }
    }
})

document.getElementById('restart').addEventListener('click',function(event){
    clear();
    player.innerText = 'X'
})

document.getElementById('clear').addEventListener('click',function(event){
    player.innerText = 'X'
    clear();
    pScore[0]=0;
    pScore[1]=0;
    pin[0].innerText=0;
    pin[1].innerText=0;
})