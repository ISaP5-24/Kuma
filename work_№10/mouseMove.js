const mouse = document.createElement ('div')
mouse.style.width = '3vw';
mouse.style.height = '5vh';
mouse.style.backgroundImage = 'url(Curesore.svg)'
mouse.style.position = 'fixed';
mouse.style.opacity = '0';
mouse.style.transition = 'opacity 0,3s';
mouse.style.backgroundPosition = 'center';

document.body.appendChild(mouse)

document.addEventListener('mousemove', function(event) {
    mouse.style.opacity = '1';
    mouse.style.left = `${event.clientX - (mouse.offsetWidth / 2)}px`
    mouse.style.top = `${event.clientY - (mouse.offsetHeight / 2)}px`
    document.body.style.cursor = 'none';
})