window.onload = () => {
    setInterval(actualizarPosicionX, 10);

    const ball = document.getElementById("ball");
    const player1 = document.getElementById("player1");
    const player2 = document.getElementById("player2");
    
    document.addEventListener("keydown",(e) => {
        player1Y = parseInt(player1.getAttribute("y"));
        if (e.code === "KeyW" && player1Y >= 12) {
            player1Y = player1Y - 10;
            player1.setAttribute("y",player1Y);
        } 
        if(e.code === "KeyS" && player1Y <= 578) {
            player1Y = player1Y + 10;
            player1.setAttribute("y",player1Y);
        }
    });

    document.addEventListener("keydown",(e) => {
        player2Y = parseInt(player2.getAttribute("y"));
        if (e.code === "ArrowUp" && player2Y >= 12) {
            player2Y = player2Y - 10;
            player2.setAttribute("y",player2Y);
        } 
        if(e.code === "ArrowDown" && player2Y <= 578) {
            player2Y = player2Y + 10;
            player2.setAttribute("y",player2Y);
        }
    });
    

    function actualizarPosicionX() {
        const ball = document.getElementById("ball");
        const cx = parseInt(ball.getAttribute("cx"));
        const cy = parseInt(ball.getAttribute("cy"));
        const player1Y = parseInt(player1.getAttribute("y"));
        const player1X = parseInt(player1.getAttribute("x"));
        const player2Y = parseInt(player2.getAttribute("y"));
        const player2X = parseInt(player2.getAttribute("x"));
        const velocidad = 3;
        
        // Cambiar la dirección si alcanza un límite
        /*if (cx <= 35) {
            direccionX = 1;
        } else if (cx >= (994 - 32)) {
            direccionX = -1;
        }
        */

        if(cx <= player1X + 50 && cy >= player1Y && cy <= player1Y + 100) {
            direccionX = 1;
        }else if(cx <= 35) {
            direccionX = 1;
        }else if (cx >= (994 - 32)) {
            direccionX = -1;
        }

        if(cx >= player2X - 35 && cy >= player2Y && cy <= player2Y + 120) {
            direccionX = -1;
        }

        if(cy <= 35) {
            direccionY = 1;
        } else if(cy >= (694 - 32)) {
            direccionY = -1;
        }

        // Calcular la nueva posición en función de la dirección
        const nuevaX = cx + velocidad * direccionX;
        const nuevaY = cy + velocidad * direccionY;
        ball.setAttribute("cx", nuevaX);
        ball.setAttribute("cy", nuevaY);
    }

var direccionX = 1; 
var direccionY = 1;
};