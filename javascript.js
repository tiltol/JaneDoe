function moveBlock(event) {
  var block = document.getElementById('outerdiv');
  block.style.left = event.clientX +'vw';
  block.style.top = event.clientY + 'vw';
}

document.addEventListener('mousemove', moveBlock);
