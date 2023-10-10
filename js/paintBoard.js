/**
* paintBoard.js
* 최초작성일: 2023.10.04
* 최초작성자: 곽신아
* 이력: 2023.10.10 집 그리기
*/
//
const canvas = document.getElementById("canvas");
//
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

//집그리기

ctx.fillRect(200, 200, 50, 200);
ctx.fillRect(400, 200, 50, 200);
ctx.fillRect(200, 200, 200, 20);
ctx.moveTo(200, 200);
ctx.lineTo(325, 100);
ctx.lineTo(450, 200);
ctx.fill();
ctx.beginPath();
ctx.fillStyle="blue";
ctx.fillRect(300, 300, 50, 100);
ctx.closePath();
