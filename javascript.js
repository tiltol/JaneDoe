function moveBlock(event) {
  var block = document.getElementById('outerdiv');
  block.style.left = event.clientX -500+'px';
  block.style.top = event.clientY -190 + 'px';
}

document.addEventListener('mousemove', moveBlock);
