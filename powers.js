const activateFlight = document.getElementById("activate-flight")
const flightSection = document.getElementById("flight");


activateFlight.addEventListener("click", function () {
    flightSection.classList.toggle("enabled");
});


const activateMindreading = document.querySelector("#activate-mindreading").addEventListener("click", function() {
    const mindreadingSection = document.getElementById("mindreading");
    mindreadingSection.classList.toggle("enabled");
});

const activateXray = document.querySelector("#activate-xray").addEventListener("click", function() {
    const xraySection = document.getElementById("xray");
    xraySection.classList.toggle("enabled");
});

const activateAll = document.querySelector("#activate-all").addEventListener("click", function() {
    const selectAll = document.querySelectorAll(".power");
        for (let i = 0; i < selectAll.length; i++) {
        selectAll[i].classList.remove("disabled"); 
        selectAll[i].classList.add("enabled"); 
        }
});

const deactivateAll = document.querySelector("#deactivate-all").addEventListener("click", function() {
    const selectAll = document.querySelectorAll(".power");
        for (let i = 0; i < selectAll.length; i++) {
        selectAll[i].classList.remove("enabled");
        selectAll[i].classList.add("disabled"); 
        }
});