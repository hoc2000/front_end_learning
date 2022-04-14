const open= document.getElementById('open');
const fade_modal= document.getElementById('fade_modal');

open.addEventListener('click',() =>{
    fade_modal.classList.add('show')
});

fade_modal.addEventListener('click',() =>{
    fade_modal.classList.remove('show')
});

