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

