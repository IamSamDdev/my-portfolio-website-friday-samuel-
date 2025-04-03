


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
        body: JSON.stringify(formData) // Convert to JSON format
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

