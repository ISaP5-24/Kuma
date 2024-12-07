const colorsContain = document.getElementById('colorsContain');
const text = document.getElementById('text');
const color = document.getElementById('color');
const type = document.getElementById('type');
let colorsBank=[];


document.addEventListener('DOMContentLoaded',function(){
    let cookiGet = Cookies.get('colors');
    if(cookiGet){
        colorsBank = JSON.parse(cookiGet);
        for(item of colorsBank){
            colorsContain.innerHTML += '<div class="color" style="background-color:' + item[1] + '"><div class="info"><h5 id="name">' + item[0] + '</h5><h5 id="color">' + item[1] + '</h5></div></div>';
        }
    }
})

document.getElementById('save').addEventListener('click',function(){
    if (type.value === 'HEX' && (color.value.length == 6 || color.value.length == 3) && text.value != ''){
        color.value = '#' + color.value
        colorsBank.push([text.value, color.value]);
        Cookies.set('colors', JSON.stringify(colorsBank));
        colorsContain.innerHTML += '<div class="color" style="background-color:' + color.value + '"><div class="info"><h5 id="name">' + text.value + '</h5><h5 id="color">' + color.value + '</h5></div></div>';
        color.value = '';
        text.value = '';
    }
    else if (type.value === 'RGB' && text.value != ''){
        color.value = 'rgb(' + color.value + ')'
        colorsBank.push([text.value, color.value]);
        Cookies.set('colors', JSON.stringify(colorsBank));
        colorsContain.innerHTML += '<div class="color" style="background-color:' + color.value + '"><div class="info"><h5 id="name">' + text.value + '</h5><h5 id="color">' + color.value + '</h5></div></div>';
        color.value = '';
        text.value = '';
    }
})

document.getElementById('clear').addEventListener('click',function(){
    colorsContain.innerHTML = '';
    colorsBank = [];
    Cookies.remove('colors');
})