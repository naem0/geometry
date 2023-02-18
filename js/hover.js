
function hover(cardname) {
  const myElement = document.getElementById(cardname);
  const colors = ['red', 'blue', 'green', 'purple', 'orange']; 
  let colorIndex = 0; 

  myElement.addEventListener('mouseenter', function() {

    myElement.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
  });
}
hover('triangle-card');
hover('rectangle-card');
hover('parallelogram-card');
hover('rhombus-card');
hover('pentagon-card');
hover('ellipse-card');
