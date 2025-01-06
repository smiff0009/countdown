/*let output = document.querySelector('.output');
output.textContent = "";

function countdown() {
    for(let i = 10; i > 0; i--) {
        const para = document.createElement('p');
        
        if(i === 10) {
            para.textContent = `Countdown \${i}`;
        }
        else if(i === 0){
            para.textContent = "Blast off!";
        }
        else {
            para.textContent = i;
        }
        output.appendChild(para);
    }
}

countdown();*/

const output = document.querySelector('.output');
output.textContent = "";

let i = 10;

while (i >= 10) {
    const para = document.createElement('p');
    if (i === 10) {
        para.textContent = `Countdown ${i}`;
    }
    else if (i === 0) {
        para.textContent = 'Blast off!';
    }
    else {
        para.textContent = i;
    }
    output.appendChild(para);

    i--;
};