const btnZero = document.getElementById('btnZero');
const screen = document.getElementById('screen');

btnZero.addEventListener("click", button0);

function button0() {
  let text = "0";
  document.getElementById('screen').innerHTML = text;
}
