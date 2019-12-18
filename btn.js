const btn = document.createElement('Button');
btn.innerText = '0';
btn.id = 'btn'
btn.addEventListener('click', event =>{
    let counter = btn.innerText;
    counter = parseInt(counter) + 1;
    btn.innerText = counter;
});

document.body.appendChild(btn);
