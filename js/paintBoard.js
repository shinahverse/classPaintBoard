/**
* paintBoard.js
* 최초작성일: 2023.10.04
* 최초작성자: 곽신아
* 이력: 
*/
//
const canvas = document.getElementById("canvas");
//
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

//
ctx.moveTo(100,100);
//
ctx.lineTo(150,100);
ctx.lineTo(150,200);
ctx.lineTo(100,200);
ctx.lineTo(100,100);
//선으로 그릴 때
// ctx.stroke();
//도형 안을 채울 때
ctx.fill();