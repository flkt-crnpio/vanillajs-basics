const div = document.createElement('div');
div.id = 'btns';
const btns = [];
function addButtons(){
  for(let i=0; i<9; i++){
    btns.push(document.createElement('button'));
    btns[i].innerText = i+1;
    btns[i].className = 'btn';
    btns[i].id = 'btn'+(i+1);
    div.appendChild(btns[i]);
  }
}
addButtons();
document.body.appendChild(div);

const orderBtns = [1,2,3,6,9,8,7,4];
document.getElementById('btn5').addEventListener('click', event => {
    for(let i=0; i<9; i++){
      if(i != 4) {
        let idx = orderBtns.indexOf(parseInt(btns[i].innerText));
        console.log(idx);
        if(idx === 0){
          btns[i].innerText = orderBtns[7];
        } else {
          btns[i].innerText = orderBtns[idx - 1];
        }
      }
    }
});
