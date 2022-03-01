window.onload = function() {
  const height = document.querySelector('.nav .active').offsetTop;
  document.querySelector('.nav ul').scrollTop = height;
}