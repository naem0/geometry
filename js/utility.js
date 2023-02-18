// Get data 
function getInputFildValue(value){
    const inputFild = document.getElementById(value);
    const inputFildValue = inputFild.value;

    inputFild.value = '';
    if (inputFildValue == "" || parseFloat(inputFildValue)== NaN || parseFloat(inputFildValue) <= 0) {
        alert('Input a Valid number');
        return;
    }
    else{
        const inputFildValueNumber = parseFloat(inputFildValue);
        return inputFildValueNumber;
    }
    
}

let countnumber = 0 ;
// show data 
function displayData(cardname, total, countnumber) {
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${countnumber}</td>
    <td>${cardname}</td>
    <td>${total} ${'cm'}<sup>${2}</sup></td>
    <td><button type="button" class="btn btn-primary me-0">${'click'}</button></td>
    `;
    container.appendChild(tr);
}

// triangle calculat 
document.getElementById('area-btn').addEventListener('click', function(){
    const area = document.getElementById('triangle').innerText;
    const areaBasic = getInputFildValue('area-b');
    const areaHigst = getInputFildValue('area-h');
    const totalArea = (0.5 * areaBasic * areaHigst).toFixed(2);
    countnumber = countnumber + 1;

    displayData(area, totalArea, countnumber);
})

// rectangle calculat 
document.getElementById('rectangle-btn').addEventListener('click', function(){
    const rectangleWidth = getInputFildValue('rectangle-w');
    const rectangleLongast = getInputFildValue('rectangle-l');
    const totelRectangle = (rectangleLongast * rectangleWidth).toFixed(2);
    countnumber = countnumber + 1;

    const area = document.getElementById('rectangle').innerText;
    displayData(area, totelRectangle,  countnumber);
});

// parallelogram calculat
document.getElementById('parallelogram-btn').addEventListener('click', function(){
    const parallelogramBasic = getInputFildValue('parallelogram-b');
    const parallelogramHight = getInputFildValue('parallelogram-h');
    const totelParallelogram = (parallelogramBasic * parallelogramHight).toFixed(2);
    countnumber = countnumber + 1;

    const area = document.getElementById('parallelogram').innerText;
    displayData(area, totelParallelogram, countnumber);
});

// rhombus calculat
document.getElementById('rhombus-btn').addEventListener('click', function(){
    const rhombusWidth = getInputFildValue('rhombus-d1');
    const rhombusHight = getInputFildValue('rhombus-d2');
    const totelRhombuse = (rhombusWidth * rhombusHight).toFixed(2);
    countnumber = countnumber + 1;
    const area = document.getElementById('rhombus').innerText;
    displayData(area, totelRhombuse,  countnumber);
});

// pentagon calculat
document.getElementById('pentagon-btn').addEventListener('click', function(){
    const pentagonP = getInputFildValue('pentagon-p');
    const pentagonBasice = getInputFildValue('pentagon-b');
    const totelPentagon = (0.5 * pentagonP * pentagonBasice).toFixed(2);
    countnumber = countnumber + 1;
    const area = document.getElementById('pentagon').innerText;
    displayData(area, totelPentagon, countnumber);
    
});

// ellipse calculat
document.getElementById('ellipse-btn').addEventListener('click', function(){
    const ellipseAValue = getInputFildValue('ellipse-a');
    const ellipseBValue = getInputFildValue('ellipse-b');
    const totelEllipse =(3.1416 * ellipseAValue * ellipseBValue).toFixed(2);
    countnumber = countnumber + 1;
    const area = document.getElementById('ellipse').innerText;
    displayData(area, totelEllipse, countnumber);
    
});

document.getElementById('blog').addEventListener('click', function () {
    window.location.href = 'blog.html';
});