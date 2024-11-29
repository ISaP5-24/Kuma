const buttonleft = document.getElementById(`left`)
const buttonright = document.getElementById(`right`)
const slidesline = document.getElementById(`slidesline`)
const countcontain = document.getElementById(`countcontain`)

const colSlides = 4;

let i = 0;
buttonleft.addEventListener(`click`, function() {
    if (! (i == 0)){
        i++;
        countcontain.innerText = -i +1;
        slidesline.style.left = `${80*i}vw`;
}
}
)

buttonright.addEventListener(`click`, function() {
        if (! (-i == colSlides - 1)){
            i--;
            countcontain.innerText = -i +1;
            slidesline.style.left = `${80 * i}vw`;
}
}
)