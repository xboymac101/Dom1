function Changeit() {
  let para = document.querySelector('#text');
  let classinput = document.querySelector('#classInput');
  let element3 = classinput.value;
  para.classList.toggle(element3);
}

function allparagraphs(id) {
  let elem = document.getElementById(id);
  elem.classList.toggle("hidden");
}
function ChangeClick() {
  let elem = document.getElementById('onClick');
  elem.value = 'Clicked!';
}
