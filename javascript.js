function moveBlock(event) {
  var block = document.getElementById('outerdiv');
  block.style.left = event.clientX +'px';
  block.style.top = event.clientY + 'px';
}

document.addEventListener('mousemove', moveBlock);
