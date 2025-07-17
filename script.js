const isTouchDevice = ('ontouchstart' in window) || 
                      (navigator.maxTouchPoints > 0) || 
                      (navigator.msMaxTouchPoints > 0);

let header = document.body.children[0];

if (isTouchDevice) {
  console.log("Touch device detected");
  header.textContent="Click the box below...";
}
