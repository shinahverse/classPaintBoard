/**
* paintBoard.js
* 최초작성일: 2023.10.04
* 최초작성자: 곽신아
* 이력: 2023.10.10 집 그리기
*       2023.10.11 사람 그리기
*       2023.10.24 마우스를 클릭할 때마다 선 그리기
*/

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

//얼굴
ctx.arc(370, 150, 50, 0, 2*Math.PI);
ctx.fill();

//눈
ctx.beginPath();
ctx.arc(340,180,8, Math.PI, 2*Math.PI);
ctx.arc(380,180,8, Math.PI, 2*Math.PI);
ctx.fillStyle="white";
ctx.fill();

//몸
ctx.beginPath();
ctx.fillStyle="red";
ctx.fillRect(350, 220, 60, 200);

//팔
ctx.beginPath();
ctx.fillStyle="black";
ctx.fillRect(310, 220, 15, 100);
ctx.fillRect(430, 220, 15, 100);

//발
ctx.beginPath();
ctx.arc(360,430,18, 2*Math.PI, 3*Math.PI);
ctx.arc(400,430,18, 2*Math.PI, 3*Math.PI);
ctx.fillStyle="black";
ctx.fill();