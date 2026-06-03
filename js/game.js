const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let enemy = {
    x:0,
    y:250,
    size:25,
    hp:100,
    maxHp:100,
    speed:2
};

function moveEnemy(){

    if(enemy.x < 250 && enemy.y === 250){
        enemy.x += enemy.speed;
    }

    else if(enemy.x >= 250 && enemy.y < 370){
        enemy.y += enemy.speed;
    }

    else if(enemy.y >= 370 && enemy.x < 620){
        enemy.x += enemy.speed;
    }

    else if(enemy.x >= 620 && enemy.y > 150){
        enemy.y -= enemy.speed;
    }

    else if(enemy.y <= 150 && enemy.x < 900){
        enemy.x += enemy.speed;
    }

    if(enemy.x > 900){
        enemy.x = 0;
        enemy.y = 250;
    }
}

function drawEnemy(){

    // Cube body
    ctx.fillStyle="#4fc3f7";
    ctx.fillRect(
        enemy.x-enemy.size/2,
        enemy.y-enemy.size/2,
        enemy.size,
        enemy.size
    );

    // HP background
    ctx.fillStyle="black";
    ctx.fillRect(enemy.x-20,enemy.y-25,40,5);

    // HP bar
    ctx.fillStyle="lime";
    ctx.fillRect(
        enemy.x-20,
        enemy.y-25,
        40*(enemy.hp/enemy.maxHp),
        5
    );
}

function draw(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    // Grass
    ctx.fillStyle="#59b35a";
    ctx.fillRect(0,0,900,500);

    // Path
    ctx.fillStyle="#b68a54";

    ctx.fillRect(0,220,250,60);
    ctx.fillRect(250,220,60,180);
    ctx.fillRect(250,340,400,60);
    ctx.fillRect(590,120,60,280);
    ctx.fillRect(590,120,310,60);

    moveEnemy();
    drawEnemy();

    requestAnimationFrame(draw);
}

draw();
