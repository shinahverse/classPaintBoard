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

canvas.width = 400;
canvas.height = 500;

//line 설정
ctx.lineWidth = 5;

// 벽
ctx.strokeRect(75, 140 , 150, 110);

//문
ctx.fillRect(130, 190, 40, 60);

//지붕
ctx.beginPath();
ctx.moveTo(50,140);
ctx.lineTo(150,60);
ctx.lineTo(250, 140);
ctx.closePath();
ctx.fillStyle = "green";
ctx.fill();
