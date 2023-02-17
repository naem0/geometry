function getInputFildValue(value){
    const inputFild = document.getElementById(value);
    const inputFildValue = inputFild.value;
    const inputFildValueNumber = parseInt(inputFildValue);
    inputFild.value = '';
    return inputFildValueNumber;
}

document.getElementById('area-btn').addEventListener('click', function(){
    const areaBasic = getInputFildValue('area-b');
    const areaHigst = getInputFildValue('area-h');
    const totalArea = 0.5 * areaBasic * areaHigst;


    console.log(totalArea);
})
document.getElementById('rectangle-btn').addEventListener('click', function(){
    const rectangleWidth = getInputFildValue('rectangle-w');
    const rectangleLongast = getInputFildValue('rectangle-l');
    const totelRectangle = rectangleLongast * rectangleWidth;


    console.log(totelRectangle);
})

document.getElementById('parallelogram-btn').addEventListener('click', function(){
    const parallelogramBasic = getInputFildValue('parallelogram-b');
    const parallelogramHight = getInputFildValue('parallelogram-h');
    const totelParallelogram = parallelogramBasic * parallelogramHight;


    console.log(totelParallelogram);
})

document.getElementById('rhombus-btn').addEventListener('click', function(){
    const rhombusWidth = getInputFildValue('rhombus-d1');
    const rhombusHight = getInputFildValue('rhombus-d2');
    const totelRhombuse = rhombusWidth * rhombusHight;


    console.log(totelRhombuse);
})

