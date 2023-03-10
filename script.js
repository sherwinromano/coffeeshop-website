document.querySelector("#order").addEventListener("click", () => {
    alert("This page is not available yet");
});

document.querySelector("#submit-feedback").addEventListener("click", () => {
    let feedback = document.querySelector("#feedback");
    let card = document.querySelector(".card-result");
    let newElement = document.createElement("p");
    let overlay = document.querySelector("#overlay");
    let result = document.querySelector(".result-section");
    
    if(feedback.value === "") {
        alert("Please input some feedback");
    } else {
        card.classList.add("card-opened");
        overlay.classList.add("active");
        newElement.append(feedback.value);
        result.append(newElement);
        // Close pop-up function
        document.querySelector("#close").addEventListener("click", () => {
            card.classList.remove("card-opened");
            overlay.classList.remove("active");
            result.innerText = "";
            feedback.value = "";
        });
    }
});


// Mobile responsive

let sidenav = document.querySelector(".sidebar-mobile");
let links = document.querySelectorAll(".link");

for(let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", () => {
        sidenav.classList.remove("active");
    });
}

document.querySelector("#title").addEventListener("click", () => {
    sidenav.classList.remove("active");
});

document.querySelector("#hamburger").addEventListener("click", () => {
    sidenav.classList.add("active");
    // Toggle close sidebar
    document.querySelector("#toggle-close").addEventListener("click", () => {
        sidenav.classList.remove("active");
    });
});