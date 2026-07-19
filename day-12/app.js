let inp = document.createElement("input");
inp.setAttribute('type', 'text');
inp.placeholder = "Username";
inp.id = "Username";
document.body.append(inp);

let btn = document.createElement("button");
btn.innerText = "Click me!!";
btn.id = "btn";
document.body.append(btn);

document.querySelector("#btn").style.color = "white";
document.querySelector("#btn").style.backgroundColor = "blue";

let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
document.querySelector("body").prepend(h1);

h1.style.textDecoration = "wavy underline";
h1.style.color = "purple";

let para = document.createElement("p");
para.innerHTML = "Apna College <b>Sigma</b> Practice";
document.querySelector("body").append(para);