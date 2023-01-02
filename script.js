const sidebar = document.querySelector(".sidebar");

document.querySelector(".loginBtn").addEventListener('click', () => {
    let email = document.getElementById("email");
    sidebar.style.transform = "translateX(0)";
    email.focus();
});

document.querySelector(".closeBtn").addEventListener('click', () => {
    sidebar.style.transform = "translateX(500px)";
});

document.getElementById("order").addEventListener("click", function(){
    alert("Under development");
});

document.getElementById("submit-feedback").addEventListener("click", function(){
    let feedback = document.getElementById("feedback");

    if(feedback.value === "") {
        alert("Please input a feedback");
        feedback.focus();
    } else {
        alert(`Your feedback: ${feedback.value}`);
        alert("Thanks for your feedback");
        feedback.value = "";
        feedback.focus();
    }
});

// Mobile responsive

let sidenav = document.querySelector(".sidebar-mobile");
let links = document.querySelectorAll(".link");

for(let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(){
        sidenav.style.transform = "translateX(100%)";
    });
}

document.getElementById("title").addEventListener("click", function(){
    sidenav.style.transform = "translateX(100%)";
});

document.getElementById("hamburger").addEventListener("click", function(){
    sidenav.style.transform = "translateX(0)";
});

document.getElementById("toggle-close").addEventListener("click", function(){
    sidenav.style.transform = "translateX(100%)";
});