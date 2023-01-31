var mouseX = 0;
var mouseY = 0;
var mouseMoved = false;



function lerp(A, B, t) {
  return A + t * (B - A);
}



function handleMouseMove() {
  mouseMoved = true;
  mouseX = event.clientX;
  mouseY = event.clientY;
}
document.onmousemove = handleMouseMove;



function setTransform(element, dx, dy) {
  var transform = "translateX(" + (dx) + "px) translateY(" + (dy) + "px)";
  element.style.webkitTransform = transform;
  element.style.mozTransform = transform;
  element.style.msTransform = transform;
  element.style.oTransform = transform;
  element.style.transform = transform;  
}



function followMouse(element, t) {
  var startX = element.getBoundingClientRect().left;
  var startY = element.getBoundingClientRect().top;
  
  var targetX = mouseX - element.offsetWidth / 2;
  var targetY = mouseY - element.offsetHeight / 2;
  
  var newX = lerp(startX, targetX, t);
  var newY = lerp(startY, targetY, t);
  
  setTransform(element, newX, newY);
}



function setPosition(element, target) {
  var targetX = target.offsetWidth / 2 - element.offsetWidth / 2;
  var targetY = target.offsetHeight / 2 - element.offsetHeight / 2;
  
  setTransform(element, targetX, targetY);  
}



window.requestAnimationFrame(draw); 
function draw() {
  if (mouseMoved) {
    followMouse(el1, 0.1);
    followMouse(el2, 0.3);    
  }
  window.requestAnimationFrame(draw); 
}



window.onload = function() {
  var el1 = document.getElementById("el1");
  var el2 = document.getElementById("el2");
  var viewport = document.body;

  setPosition(el1, viewport);
  setPosition(el2, viewport);
};
