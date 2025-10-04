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

document.addEventListener("DOMContentLoaded", function () {
    // Animate linear progress bars on scroll up or down
    const progressBars = document.querySelectorAll(".progress-bar");
    const barObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                let width = 0;
                const target = parseInt(bar.getAttribute("aria-valuenow"), 10);
                
                bar.style.width = "0%"; // reset width before animation
                
                const step = () => {
                    if (width <= target) {
                        bar.style.width = width + "%";
                        width++;
                        requestAnimationFrame(step);
                    }
                };
                step();
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => barObserver.observe(bar));


    // Animate circle progress bars on scroll up or down
    const circles = document.querySelectorAll(".progress-circle");
    const circleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const circle = entry.target;
                const fg = circle.querySelector(".fg");
                const text = circle.querySelector(".progress-text");
                const percentage = parseInt(circle.getAttribute("data-percentage"), 10);
                const radius = fg.r.baseVal.value;
                const circumference = 2 * Math.PI * radius;

                fg.style.strokeDasharray = circumference;
                fg.style.strokeDashoffset = circumference;

                let progress = 0;
                const step = () => {
                    if (progress <= percentage) {
                        fg.style.strokeDashoffset = circumference - (progress / 100) * circumference;
                        text.textContent = progress + "%";
                        progress++;
                        requestAnimationFrame(step);
                    }
                };
                step();
            }
        });
    }, { threshold: 0.5 });

    circles.forEach(circle => circleObserver.observe(circle));
});



//validation

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Form submit ko roko
    let valid = true;

    // Reset previous errors
    const fields = ["name","email","phone","subject","message"];
    fields.forEach(id => {
        document.getElementById(id).nextElementSibling.textContent = "";
    });

    // Name validation
    const name = document.getElementById("name").value.trim();
    if(name === "") {
        document.getElementById("name").nextElementSibling.textContent = "Please enter your name.";
        valid = false;
    } else if(name.length < 3) {
        document.getElementById("name").nextElementSibling.textContent = "Name must be at least 3 characters.";
        valid = false;
    }

    // Email validation
    const email = document.getElementById("email").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email === "") {
        document.getElementById("email").nextElementSibling.textContent = "Please enter your email.";
        valid = false;
    } else if(!emailRegex.test(email)) {
        document.getElementById("email").nextElementSibling.textContent = "Please enter a valid email.";
        valid = false;
    }

    // Phone validation
    const phone = document.getElementById("phone").value.trim();
    const phoneRegex = /^[0-9]{10}$/;
    if(phone === "") {
        document.getElementById("phone").nextElementSibling.textContent = "Please enter your mobile number.";
        valid = false;
    } else if(!phoneRegex.test(phone)) {
        document.getElementById("phone").nextElementSibling.textContent = "Phone number must be 10 digits.";
        valid = false;
    }

    // Subject validation (5-100 chars)
    const subject = document.getElementById("subject").value.trim();
    if(subject === "") {
        document.getElementById("subject").nextElementSibling.textContent = "Please enter a subject.";
        valid = false;
    } else if(subject.length < 5) {
        document.getElementById("subject").nextElementSibling.textContent = "Subject must be at least 5 characters.";
        valid = false;
    } else if(subject.length > 100) {
        document.getElementById("subject").nextElementSibling.textContent = "Subject cannot exceed 100 characters.";
        valid = false;
    }

    // Message validation (20-500 chars)
    const message = document.getElementById("message").value.trim();
    if(message === "") {
        document.getElementById("message").nextElementSibling.textContent = "Please enter your message.";
        valid = false;
    } else if(message.length < 20) {
        document.getElementById("message").nextElementSibling.textContent = "Message must be at least 20 characters.";
        valid = false;
    } else if(message.length > 500) {
        document.getElementById("message").nextElementSibling.textContent = "Message cannot exceed 500 characters.";
        valid = false;
    }

    if(valid){
        this.submit(); 
    }
});



