const display=document.querySelector('#display');
const buttons=document.querySelectorAll('button');


buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        if(button.id==='clear'){
            display.innerText='';
        }
        else if(button.id==='backspace'){
            display.innerText=display.innerText.slice(0,-1);
        }
        else if(display.innerText !=='' && button.id === '='){
            display.innerText=eval(display.innerText);
        }
        else if(display.innerText === '' && button.id === '='){
            display.innerText='';
        }
        else{
            display.innerText+=button.id;
        }
    })
})