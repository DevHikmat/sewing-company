// INPUTS
const banniInput = document.getElementById("bn");
const crInput = document.getElementById("cr");
const mInput = document.getElementById("m");
const fourtyInput = document.getElementById("40/70");

// SHOW PLACE
const banniSum = document.querySelector("#banni b");
const crSum = document.querySelector("#sred b");
const mSum = document.querySelector("#mmm b");
const fourtySum = document.querySelector("#fourty b");

const calcBtn = document.querySelector("#calculate");
const errorPlace = document.querySelector(".error");

let banniTotal = 0, crTotal = 0, mTotal = 0, fourtyTotal = 0;

banniInput.addEventListener("input", function (e) {
    let sum = 0, banniValue = e.target.value.trim().split(",");
    banniValue.forEach(item => {
        if (item.trim()) sum += 1 * item.trim();
    })
    sum = sum * 170;
    if(sum || sum == 0) {
        banniSum.innerText = sum;
        banniTotal = sum;
        errorPlace.innerHTML = "";
    } else {
        errorPlace.innerHTML = `<div class="fade show alert alert-danger fixed-top d-flex justify-content-between" role="alert">
            <small>Sonlar orasi , bilan ajratilmadi.</small>
            <button class="btn-close" data-bs-dismiss="alert"></button>
          </div>`
    }
})

crInput.addEventListener("input", function (e) {
    let sum = 0, crValue = e.target.value.trim().split(",");
    crValue.forEach(item => {
        if (item.trim()) sum += 1 * item.trim();
    })
    sum = sum * 120;
    if(sum || sum == 0) {
        crSum.innerText = sum;
        errorPlace.innerHTML = "";
        crTotal = sum;
    } else {
        errorPlace.innerHTML = `<div class="fade show alert alert-danger fixed-top d-flex justify-content-between" role="alert">
            <small>Sonlar orasi , bilan ajratilmadi.</small>
            <button class="btn-close" data-bs-dismiss="alert"></button>
          </div>`
    }
})

mInput.addEventListener("input", function (e) {
    let sum = 0, mValue = e.target.value.trim().split(",");
    mValue.forEach(item => {
        if (item.trim()) sum += 1 * item.trim();
    })
    sum = sum * 96;
    if(sum || sum == 0) {
        mSum.innerText = sum;
        mTotal = sum;
        errorPlace.innerHTML = "";
    } else {
        errorPlace.innerHTML = `<div class="fade show alert alert-danger fixed-top d-flex justify-content-between" role="alert">
            <small>Sonlar orasi , bilan ajratilmadi.</small>
            <button class="btn-close" data-bs-dismiss="alert"></button>
          </div>`
    }
})

fourtyInput.addEventListener("input", function (e) {
    let sum = 0, fourtyValue = e.target.value.trim().split(",");
    fourtyValue.forEach(item => {
        if (item.trim()) sum += 1 * item.trim();
    })
    sum = sum * 106;
    if(sum || sum == 0) {
        fourtySum.innerText = sum;
        fourtyTotal = sum;
        errorPlace.innerHTML = "";
    } else {
        errorPlace.innerHTML = `<div class="fade show alert alert-danger fixed-top d-flex justify-content-between" role="alert">
            <small>Sonlar orasi , bilan ajratilmadi.</small>
            <button class="btn-close" data-bs-dismiss="alert"></button>
          </div>`
    }
})

calcBtn.addEventListener("click", function() {
    document.getElementById('all').innerText = "Jami: " + (banniTotal + crTotal + mTotal + fourtyTotal) + " so'm.";
})

document.querySelector("button[type=reset]").addEventListener('click', () => {
    banniTotal = 0;
    crTotal = 0;
    mTotal = 0;
    fourtyTotal = 0;
    document.getElementById("all").innerText = "Jami: 0 so'm.";
    banniSum.innerText = 0;
    crSum.innerText = 0;
    mSum.innerText = 0;
    fourtySum.innerText = 0;
})