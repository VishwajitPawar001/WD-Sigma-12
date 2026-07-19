let btn = document.createElement("button");
btn.innerText = "Click me!";

document.querySelector("body").append(btn)

btn.addEventListener("click", function () {
    this.style.backgroundColor = "green";
})

let inp = document.querySelector("input");
let h2 = document.querySelector("h2");

inp.addEventListener("input", function() {
    h2.innerText = this.value.replace(/[^A-Za-z]/g, '');
    
})