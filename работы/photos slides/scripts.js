   const slidesline = document.getElementById('slidesline');
    const countcontain = document.getElementById('countcontain');
    
    const colSlides = 4; 
    let currentIndex = 0; 
    
    function updateSlides() {
        slidesline.style.left = `${-currentIndex * 80}vw`; 
    }
    

    function autoSlide() {
        currentIndex++;
        if (currentIndex >= colSlides) {
            currentIndex = 0; 
        }
        updateSlides();
    }
    
    setInterval(autoSlide, 3000);
    
    updateSlides();
    

