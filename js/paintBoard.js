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

// ctx.fillRect(100,100, 100,100);
ctx.fillRect(100, 100, 100, 100);
ctx.rect(200, 200, 100, 100);
ctx.rect(300, 300, 100, 100);
// ctx.stroke();
ctx.fill();
ctx.rect(400, 400, 100, 100);
ctx.fillStyle = "red";
// ctx.fill();
setTimeout(()=>{
    ctx.fill();
}, 3000);