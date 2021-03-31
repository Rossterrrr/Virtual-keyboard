textArea = document.querySelector('textarea');
keys = document.querySelectorAll('[type="button"]');
keyboard = document.querySelector('.keyboard');
function init(){
    keys.forEach(item => {
        if(!item.classList.contains('keyboard_key_wide') && !item.classList.contains('keyboard_key_ultrawide') ){
            item.setAttribute('data-size','small');
        }
    });
}

keys.forEach(item => {
    item.addEventListener('click',(e) =>{
        if(e.target && !e.target.classList.contains('keyboard_key_wide') && !e.target.classList.contains('keyboard_key_ultrawide') ){
            textArea.value += item.textContent;
        }
        if(e.target && e.target.getAttribute('data-type') == 'toUpper'){
            keys.forEach(elem => {
                if(!elem.classList.contains('keyboard_key_wide') && !elem.classList.contains('keyboard_key_ultrawide') ){
                    if(elem.getAttribute('data-size') == 'big'){
                        elem.setAttribute('data-size','small');
                        elem.textContent = elem.textContent.toLowerCase();
                    }else {
                        elem.setAttribute('data-size','big');
                        elem.textContent = elem.textContent.toUpperCase();

                    }
                }
            })
        }
        if(e.target && e.target.getAttribute('data-type') == 'backspace'){
            textArea.value = textArea.value.slice(0,textArea.value.length - 1);
        }
        if(e.target && e.target.getAttribute('data-type') == 'done'){
            keyboard.style.cssText += 'bottom:-100%;';
        }
        if(e.target && e.target.getAttribute('data-type') == 'submit'){
            console.log('submit information');
            keyboard.style.cssText += 'bottom:-100%;';
        }
        if(e.target && e.target.getAttribute('data-type') == 'space'){
            textArea.value += ' '; 
        }
    });
});

textArea.addEventListener('click',(e) => {
    e.preventDefault();
    keyboard.style.cssText += 'bottom:0;';
});

init();