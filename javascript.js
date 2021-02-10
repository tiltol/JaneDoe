function moveBlock(event) {
  var block = document.getElementById('outerdiv');
  block.style.left = event.clientX +'vw';
  block.style.top = event.clientY + 'vw';
}
function moveVideoToTop(event) {
  var block = document.getElementById('coverup');
  block.style.zindex = "1"
  block.style.top = event.clientY + 'vw';
}
document.addEventListener('mousemove', moveBlock);
document.addEventListener('click',moveVideoToTop);
