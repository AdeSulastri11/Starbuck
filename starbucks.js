function imgSlider(anything) {
  document.querySelector('.starbucks').src = anything;
}
function changeColor(color) {
  const circle = document.querySelector('.circle');
  const button = document.querySelector('.button');
  const text = document.querySelector('.textBox h1 span');
  text.style.color = color;
  circle.style.background = color;
  button.style.background = color;
} 