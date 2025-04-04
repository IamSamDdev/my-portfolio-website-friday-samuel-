

document.addEventListener("DOMContentLoaded", function () {
    let tl = gsap.timeline();

    // Image animation (scales in with opacity)
    tl.from(".circle img", {
        scale: 0,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out"
    });

    // Text animations (fade in & slide up)
    tl.from(".welcome-box, .name, .job-title, .little-about-me", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3
    });

    // Buttons animation
    tl.from(".cv-download, .hire-me", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.3
    });

    // Social Icons (staggered entrance)
    tl.from(".social-icons a", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out"
    });

    gsap.from(".my-about-picture", {
        x: -100, 
        opacity: 0, 
        duration: 1, 
        ease: "power2.out"
    });

    // Animate text details (slide from right)
    gsap.from(".details", {
        x: 100, 
        opacity: 0, 
        duration: 1, 
        delay: 0.3, 
        ease: "power2.out"
    });

    // Animate the tab links on hover
    document.querySelectorAll(".tab-link").forEach((tab) => {
        tab.addEventListener("mouseenter", () => {
            gsap.to(tab, { scale: 1.1, duration: 0.2, ease: "power1.out" });
        });

        tab.addEventListener("mouseleave", () => {
            gsap.to(tab, { scale: 1, duration: 0.2, ease: "power1.out" });
        });
    });

    // Animate skills icons (fade in with a small bounce effect)
    gsap.from(".stack-logos img", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.2,
        ease: "bounce.out",
        delay: 0.8
    });

});


const tabLinks = document.querySelectorAll(".tab-link");
const tabContents = document.querySelectorAll(".tab-content")
const menuBtn = document.querySelector(".fa-bars")
const closeBtn = document.querySelector(".fa-times")
const sideLinks = document.querySelector(".mobile-nav-container")
const allSideLinks = document.querySelectorAll(".mobile-nav a");

menuBtn.addEventListener("click", function(){
    sideLinks.classList.add("menu-open")
   
})

closeBtn.addEventListener("click", function(){
    sideLinks.classList.remove("menu-open")
})

allSideLinks.forEach((items) => {
    items.addEventListener("click", function(){
        sideLinks.classList.remove("menu-open")
    })
})

tabLinks.forEach((tabLink) => {
    tabLink.addEventListener("click", function(event) {
        
        tabLinks.forEach((link) => link.classList.remove("active-link"));

        tabContents.forEach((content) => content.classList.remove("active-tab"));

        const targetTab = tabLink.getAttribute("data-tab");

        event.currentTarget.classList.add("active-link");

        document.getElementById(targetTab).classList.add("active-tab");
    });
});

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    let formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    fetch("https://formsubmit.co/ajax/fridaysamuel508@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // Send data as JSON
        body: JSON.stringify(formData) 
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            const formMessage = document.getElementById("form-message").style.display = "block";
            document.getElementById("contact-form").reset();

            setTimeout(() => {
                formMessage.style.display = "none"
            },2000)
        }
    })
    .catch(error => {
        alert("Message failed to send. Try Again.");
    });
});

