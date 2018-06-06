const sq = document.getElementById('square');
let lightness = 50;

// Blue on hover
sq.addEventListener('mouseover', function (e) {
  sq.style.backgroundColor = 'blue';
});
// red mouse button held down
sq.addEventListener('mousedown', function (e) {
  sq.style.backgroundColor = 'red';
});
// yellow mouseup
sq.addEventListener('mouseup', function (e) {
  sq.style.backgroundColor = 'yellow';
});
// green double click
sq.addEventListener('doubleclick', function (e) {
  sq.style.backgroundColor = 'green';
});
// orange on scroll wheel in window
window.addEventListener('mousewheel', function (e) {
  // console.log(`e.wheelDeltaX: ${e.wheelDeltaX}, e.wheelDeltaY: ${e.wheelDeltaY}`)
  lightness += e.wheelDeltaY;
  if (lightness < 20) {
    lightness = 20;
  } else if (lightness > 80) {
    lightness = 80;
  }

  sq.style.backgroundColor = `hsl(34, 100%, ${lightness}%)`;
});