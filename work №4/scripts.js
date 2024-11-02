const ball = document.getElementById('ball');
const click = document.getElementById('click')
const loose = document.getElementById ('loose');
const accuracy = document.getElementById('accuracy')

let p = 0;
let l = 0;
let t = 0;
function Aim () {
    document.addEventListener('mousedown', function(event){
        if (event.target == ball) {
            click.innerText = (p+1); p++;
            ball.style.left = `${Math.random() * 790}px`;
            ball.style.top = `${Math.random() * 790}px`;
        }
        else {
            loose.innerText = (l+1); l++;
        }

        if (`mousedown`){
            accuracy.innerText = t = Math.floor((p/(p+l))*100) + "%"
        }
    }
)
}
Aim()