var i=1;
var x=0;
var x1=0;
var blockRotate = document.getElementById('rotate');
var imgGirl;

function init(){
    imgGirl = document.createElement('img');
    imgGirl.className = 'img-girl';
    imgGirl.src = 'images/'+i+'.jpg';
    blockRotate.appendChild(imgGirl);
}
init();
//
// var imgGirl = document.createElement('img');
// imgGirl.className = 'img-girl';
// imgGirl.src = 'images/1.jpg';
// blockRotate.appendChild(imgGirl);

// смена картинок на ползунок
var imgRange = document.getElementById('slider');
imgRange.oninput  = function imgRangeMove() {
    i = imgRange.value;
    imgGirl.src = 'images/'+ i +'.jpg';
};

function moveRight() {
    if( i>=0 && i<=69){
        console.log(i);
        imgGirl.src = 'images/'+ i +'.jpg';
        i++;
        imgRange.value = i;
    }
    else{
        i=1;
        imgRange.value = i;
        console.log(i);
    }
}
function moveLeft() {
    if( i>=1 && i<=69){
        console.log(i);
        imgGirl.src = 'images/'+ i +'.jpg';
        i--;
        imgRange.value = i;
    }
    else{
        i=69;
        imgRange.value = i;
        console.log(i);
    }
}


// first task Смена изображения происходит в зависимости от движения мыши.
// Т.е. при движении мыши влево загружаются картинки 69-68-67.
// Если мышь движется вправо – 01-02-03.

function rotateImg() {

    x1 = event.offsetX;
    if( x > x1){
        moveLeft();
    }
    else if( x < x1){
        moveRight();
    }
    x = x1;
}
blockRotate.addEventListener('mousemove', rotateImg);

// вращение на колесико
function rotateImgWheel(event){
    event.preventDefault();
    console.log(event);
    if( event.deltaY < 0){
        console.log(event.deltaY);
        moveLeft();
    }
    else if( event.deltaY > 0){
        console.log(event.deltaY);
        moveRight();
    }
}

// another move conditions
blockRotate.addEventListener('mousewheel', rotateImgWheel);

//Добавьте в rotate таймер, который поворачивает изображение каждые 200 мс.
//Добавьте две кнопки.  На клике кнопки происходит остановка таймера, и пролистывание изображение на одно вперед или назад.
//Добавьте остановку пролистывания по нажатию пробела.

var timer;
function rotateTimerRun(){
    moveRight();
    timer = setTimeout(rotateTimerRun,200);
}
document.querySelector('#run').onclick = rotateTimerRun;

function rotateTimerStop() {
    clearTimeout(timer);
    console.log('yeeee');
};
document.querySelector('#stop').onclick = rotateTimerStop;


//Добавьте возможность листания слайдера по нажатию клавиши “вправо” и “влево”.
function rotateKey(event) {
    console.log(event);
    if(event.key == 'ArrowRight'){
        moveRight();
    }
    if(event.key == 'ArrowLeft'){
        moveLeft();
    }
}
document.addEventListener('keydown', rotateKey);


// Добавьте возможность листать слайдер с помощью клавиши “пробел”.
function rotateKeySpase(event) {
    event.preventDefault();
    if(event.key == ' '){
        moveRight();
        clearTimeout(timer);
        // rotateTimerStop();
    }
}
document.addEventListener('keydown', rotateKeySpase);



