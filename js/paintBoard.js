/**
* paintBoard.js
* 최초작성일: 2023.10.04
* 최초작성자: 곽신아
* 이력: 2023.10.10 집 그리기
*       2023.10.11 사람 그리기
*       2023.10.24 - 캔버스를 클릭할 때마다 선 그리기
*                  - 여러 색으로 선 그리기
*                  - 사용자가 마우스를 움직이다가 클릭하면 선 그리기
*                  - 선을 그릴 때마다 선 색깔 바꾸기
*                  - 색깔 선택하기
*       2023.10.25 - 모드 선택하기(채우기/그리기)
*                  - 캔버스 초기화하기
*                  - 지우기 기능 추가
*                  - 배경색에 맞추어 지우기 기능 추가
*/

const canvas = document.getElementById("canvas");
const lineWidth = document.getElementById("line-width");
const colorOptions = Array.from(document.getElementsByClassName("color-option"));
const btnMode = document.getElementById("btnMode");
const btnInit = document.getElementById("btnInit");
const btnEraser = document.getElementById("btnEraser");
let canvasBgColor = "";

const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.lineWidth = lineWidth.value;

//flag 변수
let isPainting = false;
let isFilling = false;


/**
 * 캔버스에 선을 그리는 함수
 */
function onMouseMove(event){

    if (isPainting){
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.moveTo(event.offsetX, event.offsetY);
}

/**
 * mouse버튼이 내려갈 때
 */
function onMouseDown(event){
    isPainting = true;
}

/**
 * 그리기를 취소한다.
 * 선을 그릴 때마다 선 색깔을 바꾼다.
 */
function cancelPainting(event){
    isPainting = false;
    ctx.beginPath();

}

/**
 * 선의 두께를 변경한다.
 */
function onChangeLineWidth(event){
    //console.log(event.target.value);
    ctx.lineWidth = event.target.value;
}

/**
 * 색을 변경한다.
 */
function onClickColor(event){
    //console.dir(event);
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    if (isFilling){
        canvasBgColor = colorValue;
    }
}

/**
 * 모드를 변경한다.
 * 채우기면 그리기로
 * 그리기면 채우기로
 */
function onMode(){
    //isFilling true
    if (isFilling){
        isFilling = false;
        btnMode.innerText = "채우기";
    }else {    //isFilling false
        isFilling = true;
        btnMode.innerText = "그리기";
    }
}

/**
 * 캔버스를 선택한 색깔로 채운다
 */
function onClickCanvas(event){
    //console.log("onClickCanvas", event);
    //isFilling true
    if (isFilling) {
        ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    }
    
}

/** 
 * 캔버스를 초기화한다. 
*/
function onClickInit(){
    
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

/**
 * 그린 그림을 지운다.
 */
 function onClickEraser(event){
    //console.dir(event);
    //ctx.strokeStyle = "white";
    ctx.strokeStyle = canvasBgColor;
    isFilling = false;
    btnMode.innerText = "채우기"

 }

canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onClickCanvas);
lineWidth.addEventListener("change", onChangeLineWidth);

colorOptions.forEach((color) =>
    color.addEventListener("click", onClickColor));

btnMode.addEventListener("click", onMode);

btnInit.addEventListener("click", onClickInit);

btnEraser.addEventListener("click", onClickEraser)