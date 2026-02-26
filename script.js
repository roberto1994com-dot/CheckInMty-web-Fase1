

    // Función para avanzar/retroceder
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("carousel-slide");
        
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
            slides[i].classList.remove("active");
        }
        
        slides[slideIndex-1].style.display = "block";  
        setTimeout(() => {
             slides[slideIndex-1].classList.add("active");
        }, 10);
    }

    // Opcional: Cambio automático cada 5 segundos
    setInterval(function(){ 
        plusSlides(1); 
    }, 5000);


function openImage(src) {
    document.getElementById("viewerImg").src = src;
    document.getElementById("imageViewer").style.display = "flex";
}

function closeImage() {
    document.getElementById("imageViewer").style.display = "none";
}

