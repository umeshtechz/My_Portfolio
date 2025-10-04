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

    // Form Validation
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function(e) {
        e.preventDefault(); 
        let valid = true;

        const fields = ["name","email","phone","subject","message"];
        fields.forEach(id => {
            document.getElementById(id).nextElementSibling.textContent = "";
        });

        const name = document.getElementById("name").value.trim();
        if(name === "") {
            document.getElementById("name").nextElementSibling.textContent = "Please enter your name.";
            valid = false;
        } else if(name.length < 3) {
            document.getElementById("name").nextElementSibling.textContent = "Name must be at least 3 characters.";
            valid = false;
        }

        const email = document.getElementById("email").value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(email === "") {
            document.getElementById("email").nextElementSibling.textContent = "Please enter your email.";
            valid = false;
        } else if(!emailRegex.test(email)) {
            document.getElementById("email").nextElementSibling.textContent = "Please enter a valid email.";
            valid = false;
        }

        const phone = document.getElementById("phone").value.trim();
        const phoneRegex = /^[0-9]{10}$/;
        if(phone === "") {
            document.getElementById("phone").nextElementSibling.textContent = "Please enter your mobile number.";
            valid = false;
        } else if(!phoneRegex.test(phone)) {
            document.getElementById("phone").nextElementSibling.textContent = "Phone number must be 10 digits.";
            valid = false;
        }

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
            form.submit(); // safe submit
        }
    });
;
