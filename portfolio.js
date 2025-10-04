document.addEventListener('DOMContentLoaded', function () {
    const roles = ["Java Full Stack Developer", "Youtuber"];
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    const typingSpeed = 80; 
    const erasingSpeed = 80; 
    const delayBetweenRoles = 1000; 

    const typingTextElement = document.getElementById('typing-text');

    function typeRole() {
        if (currentCharIndex < roles[currentRoleIndex].length) {
            typingTextElement.textContent += roles[currentRoleIndex].charAt(currentCharIndex);
            currentCharIndex++;
            setTimeout(typeRole, typingSpeed);
        } else {
            setTimeout(eraseRole, delayBetweenRoles);
        }
    }

    function eraseRole() {
        if (currentCharIndex > 0) {
            typingTextElement.textContent = roles[currentRoleIndex].substring(0, currentCharIndex - 1);
            currentCharIndex--;
            setTimeout(eraseRole, erasingSpeed);
        } else {
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            setTimeout(typeRole, typingSpeed);
        }
    }

    typeRole();
});



//servicessanimation
document.addEventListener('DOMContentLoaded', function () {
    const roles = ["I WILL DO FOR YOU"];
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    const typingSpeed = 80; 
    const erasingSpeed = 80; 
    const delayBetweenRoles = 1000; 

    const typingTextElement = document.getElementById('typing-text2');

    function typeRole() {
        if (currentCharIndex < roles[currentRoleIndex].length) {
            typingTextElement.textContent += roles[currentRoleIndex].charAt(currentCharIndex);
            currentCharIndex++;
            setTimeout(typeRole, typingSpeed);
        } else {
            setTimeout(eraseRole, delayBetweenRoles);
        }
    }

    function eraseRole() {
        if (currentCharIndex > 0) {
            typingTextElement.textContent = roles[currentRoleIndex].substring(0, currentCharIndex - 1);
            currentCharIndex--;
            setTimeout(eraseRole, erasingSpeed);
        } else {
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            setTimeout(typeRole, typingSpeed);
        }
    }

    typeRole();
});


//skillsanimation
document.addEventListener('DOMContentLoaded', function () {
    const roles = ["And Professional"];
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    const typingSpeed = 80; 
    const erasingSpeed = 80; 
    const delayBetweenRoles = 1000; 

    const typingTextElement = document.getElementById('typing-text3');

    function typeRole() {
        if (currentCharIndex < roles[currentRoleIndex].length) {
            typingTextElement.textContent += roles[currentRoleIndex].charAt(currentCharIndex);
            currentCharIndex++;
            setTimeout(typeRole, typingSpeed);
        } else {
            setTimeout(eraseRole, delayBetweenRoles);
        }
    }

    function eraseRole() {
        if (currentCharIndex > 0) {
            typingTextElement.textContent = roles[currentRoleIndex].substring(0, currentCharIndex - 1);
            currentCharIndex--;
            setTimeout(eraseRole, erasingSpeed);
        } else {
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            setTimeout(typeRole, typingSpeed);
        }
    }

    typeRole();
});





function toggleIcon(button) {
    let icon = button.querySelector("i");
    let navbarCollapse = document.getElementById("navbarNav");
    
    if (icon.classList.contains("fa-bars")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
        navbarCollapse.classList.add("show");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        navbarCollapse.classList.remove("show");
    }
}

document.addEventListener("click", function (event) {
    let navbar = document.getElementById("navbarNav");
    let toggler = document.querySelector(".navbar-toggler");
    let icon = toggler.querySelector("i");
    
    if (!toggler.contains(event.target) && !navbar.contains(event.target)) {
        closeNavbar();
    }
});

function closeNavbar() {
    let navbar = document.getElementById("navbarNav");
    let icon = document.querySelector(".navbar-toggler i");
    navbar.classList.remove("show");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
}







//circle-progress-bar
document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress-circle");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                resetProgress(entry.target);
                setTimeout(() => startProgress(entry.target), 100);
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(progress => {
        observer.observe(progress);
    });

    function resetProgress(progress) {
        const circle = progress.querySelector(".fg");
        const text = progress.querySelector(".progress-text");

        circle.style.transition = "none";
        circle.style.strokeDashoffset = 314;
        text.textContent = "0%";
    }

    function startProgress(progress) {
        const percentage = progress.getAttribute("data-percentage");
        const circle = progress.querySelector(".fg");
        const text = progress.querySelector(".progress-text");
        const offset = 314 - (314 * percentage) / 100;
        
        let count = 0;
        const interval = setInterval(() => {
            text.textContent = count + "%";
            if (count >= percentage) {
                clearInterval(interval);
            }
            count++;
        }, 15);

        setTimeout(() => {
            circle.style.transition = "stroke-dashoffset 1s ease-in-out";
            circle.style.strokeDashoffset = offset;
        }, 100);
    }
});







window.addEventListener("scroll", function () {
    let scrollButton = document.querySelector(".scroll-to-top");
    if (window.scrollY > 300) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
});


document.querySelector(".scroll-to-top").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".fade-in");
    function checkScroll() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.classList.add("visible");
            }
        });
    }
    window.addEventListener("scroll", checkScroll);
    checkScroll();
});



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



