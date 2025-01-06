const output = document.querySelector('.output');
for(i = 10; i >= 0; i--) {
    function delay(){
    const para = document.createElement('p');
    if(i === 10) {
        para.textContent = `Countdown ${i}`;
    }
    else if (i === 0) {
        para.textContent = "Blast off!";
    }
    else {
        para.textContent = i;
    }
    output.appendChild(para);
    }
    setTimeout(delay, 1000);
}