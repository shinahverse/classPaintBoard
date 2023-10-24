/**
* paintBoard.js
* 최초작성일: 2023.10.04
* 최초작성자: 곽신아
* 이력: 2023.10.10 집 그리기
*       2023.10.11 사람 그리기
*       2023.10.24 - 캔버스를 클릭할 때마다 선 그리기
*                  - 여러 색으로 선 그리기
*                  - 사용자가 마우스를 움직이다가 클릭하면 선 그리기
*/

const canvas = document.getElementById("canvas");
const lineWidth = document.getElementById("line-width");
const ctx = canvas.getContext("2d");
const colors = ["blue", "green", "yellow", "orange", "red", "skyblue", "purple"];

//flag 변수
let isPainting = false;

canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;

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
 */
function cancelPainting(event){
    isPainting = false;
    ctx.beginPath();
}

/**
 * 선의 두께를 변경한다.
 */
function onChangeLineWidth(event){
    console.log(event.target.value);
    ctx.lineWidth = event.target.value;
}

canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);

lineWidth.addEventListener("change", onChangeLineWidth);
