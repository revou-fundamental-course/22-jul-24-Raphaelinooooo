// for banner auto slide
document.addEventListener('DOMContentLoaded', () =>{
    let currentIndex = 0;
    const images = document.querySelectorAll('.item-icon img');
    const totalImages = images.length;
    console.log(images);

    if (images.length == 0) {
        console.error("");
        return
    }

    function slideImages() {
        currentIndex++;
        
        if (currentIndex >= totalImages) {
            currentIndex = 0;
        }
        
        const offset = -currentIndex * 100; // Calculate offset for sliding
        const slider = document.querySelector('.item-icon');
        console.log(slider);
        // document.querySelector('.item.icon').style.transform = `translateX(${offset}%)`;
    
        if(slider){
            slider.style.transform = `translateX(${offset}%)`;
        }else{
            console.error("Not found.")
        }
    }
    // Slide every 3 seconds
    setInterval(slideImages, 3000);
});

// for Form toast
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (this.checkValidity()) {
            showToast('Form submitted successfully!');
            form.reset(); // Clear form fields
        } else {
            showToast('Please fill out all required fields.');
        }
    });

    function showToast(message) {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.className = 'toast show';
        setTimeout(function() { 
            toast.className = toast.className.replace('show', ''); 
        }, 3000);
    }
});
