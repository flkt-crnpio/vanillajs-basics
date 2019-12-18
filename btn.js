const btn = document.getElementById('btn');

btn.addEventListener('click', event =>{
    var counter = btn.innerText;
    counter = parseInt(counter) + 1;
    btn.innerText = counter;
});
