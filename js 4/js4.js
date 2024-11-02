const round = document.getElementById('round');
const round2 = document.getElementById('round2');
const round3 = document.getElementById('round3');
const round4 = document.getElementById('round4');
const round5 = document.getElementById('round5');
const round6 = document.getElementById('round6');
const myH = document.getElementById('myH')
const myH1 = document.getElementById('myH1')

let i = 0;
let c = 0;
let flag = false;

function csTrener () {
    document.addEventListener('mousedown', function(event){
        if (event.target == round ) {
            myH.innerText = i++;
            round.style.left = `${Math.random() * 92}vw`;
            round.style.top = `${Math.random() * 92}vh`;
        }
        
    })

    document.addEventListener('mousedown', function(event2){
        if (event2.target == round2 ) {
            myH.innerText = i++;
            round2.style.left = `${Math.random() * 92}vw`;
            round2.style.top = `${Math.random() * 92}vh`;
        }
       
    })

    document.addEventListener('mousedown', function(event3){
        if (event3.target == round3 ) {
            myH.innerText = i++;
            round3.style.left = `${Math.random() * 92}vw`;
            round3.style.top = `${Math.random() * 92}vh`;
        }
        
    })

    document.addEventListener('mousedown', function(event4){
        if (event4.target == round4 ) {
            myH.innerText = i++;
            round4.style.left = `${Math.random() * 92}vw`;
            round4.style.top = `${Math.random() * 92}vh`;
        }
        
    })

    document.addEventListener('mousedown', function(event5){
        if (event5.target == round5 ) {
            myH.innerText = i++;
            round5.style.left = `${Math.random() * 92}vw`;
            round5.style.top = `${Math.random() * 92}vh`;
        }
       
    })

    document.addEventListener('mousedown', function(event6){
        if (event6.target == round6 ) {
            myH.innerText = i++;
            round6.style.left = `${Math.random() * 92}vw`;
            round6.style.top = `${Math.random() * 92}vh`;
        }
        c++;
        if(flag == true){
            myH1.innerText = (i/c*100).toFixed(2);
        }
    
        else if(i <= 100){  
            flag = true;
        }
    
        else {
            flag = false;
        }
    })
    
    


}

csTrener()
