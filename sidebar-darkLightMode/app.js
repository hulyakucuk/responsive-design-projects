
const body = document.querySelector("body");
const sidebar=body.querySelector(".sidebar");
const toggle =body.querySelector(".toggle");
const searchBtn = body.querySelector(".search-box");
const modeSwitch=body.querySelector(".toggle-switch");
const modeText=body.querySelector(".mode-text");

toggle.addEventListener("click", () =>{
    sidebar.classList.toggle("close");

});


modeSwitch.addEventListener("click", () =>{
    body.classList.toggle("dark");

});



