const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

function draw(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    // grass
    ctx.fillStyle="#59b35a";
    ctx.fillRect(0,0,900,500);

    // path
    ctx.fillStyle="#b68a54";

    ctx.fillRect(0,220,250,60);
    ctx.fillRect(250,220,60,180);
    ctx.fillRect(250,340,400,60);
    ctx.fillRect(590,120,60,280);
    ctx.fillRect(590,120,310,60);

    requestAnimationFrame(draw);
}

draw();
