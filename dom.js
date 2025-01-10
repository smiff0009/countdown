const para = document.createElement("p");
const body = document.querySelector("body");
para.textContent = "Hey I'm red!";
para.style.color = "red";
body.appendChild(para);

const h3 = document.createElement("h3");
h3.style.color = blue;
h3.textContent = "I'm a blue h3!";
body.appendChild(h3);

const div = document.createElement("div");
div.style.border = black;
div.style.backgroundColor = pink;


const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
div.appendChild(h1);

const newPara = document.createElement("p")
newPara.textContent = "ME TOO!";
div.appendChild(newPara);
body.appendChild(div);