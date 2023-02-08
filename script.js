const sidebar = document.querySelector(".sidebar");

document.querySelector(".loginBtn").addEventListener('click', () => {
    let email = document.getElementById("email");
    sidebar.style.transform = "translateX(0)";
    email.focus();
});

document.querySelector(".closeBtn").addEventListener('click', () => {
    sidebar.style.transform = "translateX(500px)";
});

document.querySelector("#order").addEventListener("click", function(){
    alert("This page is not available yet");
});



document.querySelector("#submit-feedback").addEventListener("click", function(){
    /* let feedback = document.getElementById("feedback");

    if(feedback.value === "") {
        alert("Please input a feedback");
        feedback.focus();
    } else {
        alert(`Your feedback: ${feedback.value}`);
        feedback.value = "";
        feedback.focus();
    } */
    let feedback = document.querySelector("#feedback");
    let card = document.querySelector(".card-result");
    let feed = document.querySelector("#result");
    
    if(feedback.value === "") {
        alert("Please input some feedback");
    } else {
        card.classList.add("card-opened");
        feed.append(feedback.value);
        // Close pop-up function
        document.querySelector("#close").addEventListener("click", function(){
            card.classList.remove("card-opened");
            feed.innerText = "";
            feedback.value = "";
        });
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

document.querySelector("#title").addEventListener("click", function(){
    sidenav.style.transform = "translateX(100%)";
});

document.querySelector("#hamburger").addEventListener("click", function(){
    sidenav.style.transform = "translateX(0)";
});

document.querySelector("#toggle-close").addEventListener("click", function(){
    sidenav.style.transform = "translateX(100%)";
});