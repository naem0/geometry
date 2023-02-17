const myElement = document.getElementById('my-element');
const colors = ['red', 'blue', 'green', 'purple', 'orange']; 
let colorIndex = 0; 

myElement.addEventListener('mouseenter', function() {

  myElement.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
});
