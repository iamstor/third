let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let size = Math.min(canvas.width, canvas.height) / 10 - 2;
let radius = 1;

let xCanvas = document.getElementById("canvas-form:xCanvas");
let yCanvas = document.getElementById("canvas-form:yCanvas");
let counter;
let table = document.getElementById("table-form:result-table").childNodes[3];
drawRectangle();
drawArea(radius);
drawAxis();
drawResize();

let link_3 = document.getElementById("main-form:r1");
let link_2 = document.getElementById("main-form:r2");
let link_1 = document.getElementById("main-form:r3");
let link0 = document.getElementById("main-form:r4");
let link1 = document.getElementById("main-form:r5");
link_3.addEventListener("click", function (ev) {
    console.log("1");
    document.getElementById("main-form:x").value = 1;

    setDefinedR(1);
});
link_2.addEventListener("click", function (ev) {
    document.getElementById("main-form:x").value = 1.5;

    setDefinedR(1.5);
});
link_1.addEventListener("click", function (ev) {
    document.getElementById("main-form:x").value = 2;

    setDefinedR(2);
});
link0.addEventListener("click", function (ev) {
    document.getElementById("main-form:x").value = 2.5;

    setDefinedR(2.5);
});
link1.addEventListener("click", function (ev) {
    document.getElementById("main-form:x").value = 3;

    setDefinedR(3);

});

function setDefinedR(i) {
    link_3.style.color = 'black';
    link_2.style.color = 'black';
    link_1.style.color = 'black';
    link0.style.color = 'black';
    link1.style.color = 'black';
    switch (i) {
        case 1:
            link_3.style.color = 'red';
            break;
        case 1.5:
            link_2.style.color = 'red';
            break;
        case 2:
            link_1.style.color = 'red';
            break;
        case 2.5:
            link0.style.color = 'red';
            break;
        case 3:
            link1.style.color = 'red';
            break;

    }


}


function handleRChange(r) {

    document.getElementById("main-form:x").value=r;
    radius=r;
    clearCanvas();
    drawRectangle();
    drawArea(radius);
    drawPointsFromTable();
    drawAxis();
    setTimeout(() => drawResize(), 10);
}


function isPointInArea(x, y, r) {
    console.log(x, y, r);
    return (x >= 0 && y <= 0 && x <= r/2 && y >= -r || x <= 0 && y <= 0 &&  y + 2*x >= -r ||
        x >= 0 && y >= 0 && x * x + y * y <= (r) * (r));
}

function handleCanvasClick(event) {
    let obj = event.target;
    let x = Number(((event.pageX - window.pageXOffset - obj.getBoundingClientRect().x - obj.width / 2) / size).toFixed(2));
    let y = Number((-(event.pageY - window.pageYOffset - obj.getBoundingClientRect().y - obj.height / 2) / size).toFixed(2));
    console.log(x);
    console.log(y);
    if (x >= -3 && x <= 5 && y >= -3 && y <= 3) {
        xCanvas.value = x;
        yCanvas.value = y;
        checkCanvas();
    }
}



