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
const errorText = document.querySelector("#error");

let banniTotal = 0, crTotal = 0, mTotal = 0, fourtyTotal = 0;

banniInput.addEventListener("input", function (e) {
    let sum = 0, banniValue = e.target.value.trim().split(",");
    banniValue.forEach(item => {
        if (item.trim()) sum += 1 * item.trim();
    })
    sum = sum * 170;
    if(sum || sum == 0) {
        banniSum.innerText = sum;
        errorText.innerHTML = "";
        banniTotal = sum;
    } else {
        errorText.innerHTML = "Iltimos to'g'ri kiriting !";
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
        errorText.innerHTML = "";
        crTotal = sum;
    } else {
        errorText.innerHTML = "Iltimos to'g'ri kiriting !";
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
        errorText.innerHTML = "";
        mTotal = sum;
    } else {
        errorText.innerHTML = "Iltimos to'g'ri kiriting !";
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
        errorText.innerHTML = "";
        fourtyTotal = sum;
    } else {
        errorText.innerHTML = "Iltimos to'g'ri kiriting !";
    }
})

calcBtn.addEventListener("click", function() {
    document.getElementById('all').innerText = "Jami: " + (banniTotal + crTotal + mTotal + fourtyTotal) + " so'm !";
})

document.querySelector("button[type=reset]").addEventListener('click', () => {
    document.getElementById("all").innerText = "";
    banniSum.innerText = 0;
    crSum.innerText = 0;
    mSum.innerText = 0;
    fourtySum.innerText = 0;
})