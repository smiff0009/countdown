
const output = document.querySelector('.output');
const para = document.createElement('p');
const btn = document.querySelector('.click')
/*
function addText() {
    output.appendChild(para);
    para.textContent = "You clicked me!";
}
*/


btn.addEventListener("click", addText);

function addText() {
    output.appendChild(para);
    para.textContent = "You clicked me!";
}