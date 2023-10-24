/**
* paintBoard.js
* 최초작성일: 2023.10.04
* 최초작성자: 곽신아
* 이력: 2023.10.10 집 그리기
*       2023.10.11 사람 그리기
*       2023.10.24 캔버스를 클릭할 때마다 선 그리기
*/

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

/**
 * 캔버스에 선을 그리는 함수
 */
function onClick(event){
    // console.log(event.offsetX, event.offsetY);
    ctx.moveTo(0,0);
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

canvas.addEventListener("click", onClick);
