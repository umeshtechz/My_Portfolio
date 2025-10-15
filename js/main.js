 var splide = new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    speed: 800,
    autoplay: true,
    interval: 3000, 
    pauseOnHover: false, 
    pauseOnFocus: false,
    arrows: false,
    breakpoints: { 
        776: { perPage: 2 },
        489: { perPage: 1 }
    }
});

splide.mount();

// Simple typing effect
        document.addEventListener('DOMContentLoaded', function() {
            const text = "";
            const typingElement = document.getElementById('typing-text3');
            let index = 0;
            
            function typeWriter() {
                if (index < text.length) {
                    typingElement.innerHTML += text.charAt(index);
                    index++;
                    setTimeout(typeWriter, 150);
                }
            }
            
            // Start typing effect after a short delay
            setTimeout(typeWriter, 500);
            
            // Animate skill bars when section comes into view
            const skillSection = document.getElementById('skills');
            const skillBars = document.querySelectorAll('.skill-progress');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        skillBars.forEach(bar => {
                            const width = bar.getAttribute('data-width');
                            bar.style.width = width + '%';
                        });
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(skillSection);
        });

