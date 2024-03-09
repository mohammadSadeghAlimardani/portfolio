/* ==== SIDEBAR ==== */
/* ================= */
const sidebar = document.querySelector(".sidebar");
const showSidebar = document.querySelector(".show-sidebar");
const closeSidebar = document.querySelector(".close-sidebar");

showSidebar.addEventListener("click", function(e){
    e.preventDefault();
    sidebar.classList.add("show");
})
closeSidebar.addEventListener("click", function(e){
    e.preventDefault();
    sidebar.classList.remove("show");
})

/* ==== SCROLL-ANIMATION ==== */
/* ========================== */

const links = [...document.querySelectorAll(".menu li a")];
const topNavDistanceTop = document.querySelector(".top-nav").getBoundingClientRect().height;
const aboutDistanceTop = document.querySelector(".about h3").getBoundingClientRect().y - topNavDistanceTop;
const servicesDistanceTop = document.querySelector(".services h3").getBoundingClientRect().y - topNavDistanceTop;
const contctDistanceTop = document.querySelector(".contact h3").getBoundingClientRect().y - topNavDistanceTop;
const projectsDistanceTop = document.querySelector(".projects h3").getBoundingClientRect().y - topNavDistanceTop;

links.forEach(link => {
 
    link.addEventListener("click", function(e){

        sidebar.classList.remove("show");

        e.preventDefault();
        dataScroll = link.dataset.scroll;

        switch(dataScroll){
            case "home" :
                window.scrollTo({
                    top : 0,
                    behavior: "smooth",
                });
                break;
            case "about" :
                window.scrollTo({
                    top : aboutDistanceTop,
                    behavior: "smooth",
                });
                break;
            case "services" :
                window.scrollTo({
                    top : servicesDistanceTop,
                    behavior: "smooth",
                });
                break;
            case "contact" :
                window.scrollTo({
                    top : contctDistanceTop,
                    behavior: "smooth",
                });
                break;
            case "projects" :
                window.scrollTo({
                    top : projectsDistanceTop,
                    behavior: "smooth",
                });
                break;
        } 
    })
})

/* ==== FILL-VALUES ==== */
/* ===================== */

const details = document.querySelector(".details");
const values = [...document.querySelectorAll(".value")];
const progress = [...document.querySelectorAll(".progress")];

values.map(value => {
    const amount = value.dataset.value;
    value.style.left = `${amount}%`;
})

let firstTime = true;
let increaseWidth;

window.addEventListener("scroll", function(){

    if(details.getBoundingClientRect().y <= window.scrollY && firstTime){

        progress.map(item => {
            item.classList.add("animate");  
        }) 
        firstTime = false;
    }
    increaseWidth = setInterval(check, 1);
});

function check(){

    progress.map(item => {

        const amount = item.previousElementSibling.dataset.value;

        if(item.getBoundingClientRect().width >= item.parentElement.getBoundingClientRect().width * amount / 100){
            item.style.width = `${amount}%`;
            item.classList.remove("animate");
        }
    }); 
    setTimeout(() => {
        clearInterval(increaseWidth);
    }, 3500);
}