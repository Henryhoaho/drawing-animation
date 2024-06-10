// canvas setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 500;
// animation variables
let cloudX = 200;
let cloudY = 100;
let cloud2X = 400;
let cloud2Y = 150;
let sunY = 50;
let stickManX = 100;
let stickManY = 310;
// variable
let gVal = 0;
let bVal = 255;
requestAnimationFrame(draw);
function draw() {
  // sky
  ctx.fillStyle = "lightblue";
  ctx.fillRect(0, 0, 400, 500);
  //  sun
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(75, sunY, 40, 0, 2 * Math.PI);
  ctx.fill();

  // Clouds
  let cloud = document.getElementById("cloud-img");
  ctx.drawImage(cloud, cloudX, cloudY, 100, 70);
  ctx.drawImage(cloud, cloud2X, cloud2Y, 100, 70);
  // grass
  ctx.fillStyle = "green";
  ctx.fillRect(0, 430, 400, 500);

  // dirt
  ctx.fillStyle = "brown";
  ctx.fillRect(0, 470, 400, 500);

  // house
  ctx.fillStyle = "maroon";
  ctx.fillRect(200, 250, 250, 20);
  ctx.fillRect(200, 250, 20, 180);
  ctx.fillRect(385, 250, 20, 180);
  ctx.fillStyle = "white";
  ctx.fillRect(210, 267, 183, 163);
  // window
  ctx.fillStyle = "lightgrey";
  ctx.beginPath();
  ctx.arc(245, 330, 30, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = "black";
  ctx.fillRect(242, 300, 5, 60);
  ctx.fillRect(215, 328, 60, 5);
  // door
  ctx.fillStyle = "brown";
  ctx.fillRect(280, 300, 60, 130);
  // door knob
  ctx.fillStyle = "ORANGE";
  ctx.beginPath();
  ctx.arc(330, 380, 5, 0, 2 * Math.PI);
  ctx.fill();
  // chimney
  ctx.fillStyle = "gray";
  ctx.fillRect(350, 150, 30, 100);

  // roof
  ctx.fillStyle = "brown";
  ctx.beginPath();
  ctx.moveTo(300, 90);
  ctx.lineTo(400, 250);
  ctx.lineTo(100, 250);
  ctx.lineTo(200, 250);
  ctx.fill();

  // tree
  ctx.fillStyle = "maroon";
  ctx.fillRect(50, 250, 40, 180);
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(70, 200, 60, 0, 2 * Math.PI);
  ctx.fill();
  // stickman
  let stickMan = document.getElementById((id = "stickman-img"));
  ctx.drawImage(stickMan, stickManX, stickManY, 200, 140);

  // Title
  ctx.fillStyle = `rgb(255,${gVal},${bVal})`;
  ctx.font = "20px Arial";
  ctx.fillText("House drawing", 20, 20);
  //animation
  cloudX = cloudX + 1;
  cloud2X = cloud2X + 1;
  stickManX++;
  sunY = sunY + 0.6;
  if (cloudX >= 400) {
    cloudX = -85;
    cloudY = Math.random() * 250;
  }
  if (cloud2X >= 400) {
    cloud2X = -85;
  }
  // sun
  if (sunY >= 500) {
    sunY = -100;
  }
  // title color
  gVal += 0.1;
  if (gVal == 255) {
    gVal--;
  }
  bVal += 0.1;
  if (bVal == 0) {
    bVal++;
  }

  if (stickManX >= 400) {
    stickManX = -200;
  }

  requestAnimationFrame(draw);
}
