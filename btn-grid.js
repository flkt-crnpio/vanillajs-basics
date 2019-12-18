const div = document.createElement('div');

function addButtons(){
  for(let x=1; x<=9; x++){
    let btn = document.createElement('button');
    btn.innerText = x;
    btn.className = 'btn';
    btn.id = 'btn'+x;
    div.appendChild(btn);
  }
}
addButtons();
document.body.appendChild(div);

const actionBtn = document.getElementById('btn5');
actionBtn.addEventListener('click', event => {
  console.log(actionBtn.innerText);
});
