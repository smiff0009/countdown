function countdown() {
    for(let i = 10; i >= 0; i--) {
        const para = document.createElement('p');
        const output = document.querySelector('.output');
        if(i == 10) {
            para.textContent = `Countdown ${i}`;
        }
        else if(i > 0){
            para.textContent = i;
        }
        else {
            para.textContent = "Blast off!"
        }
        output.appendChild(para);
    }
}

countdown();