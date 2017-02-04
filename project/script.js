var R = 300 / 2, d, angle, pX, pY, qX, qY
var d, angle, pX, pY, qX, qY;
for(d = 0; d < 60; ++d) {
    angle = (d / 60) * (2 * Math.PI);
    pX = Math.cos(angle) * R;
    pY = -Math.sin(angle) * R;
    qX = 0.9 * pX;
    qY = 0.9 * pY;
    pX += R; pY += R; 
    qX += R; qY += R; 
    
}

var canvas = document.getElementById("sandbox"),
    context = canvas.getContext("2d"),
    kvadrat, krug;

kvadrat = new Path2D();
kvadrat.moveTo(50, 50);
kvadrat.lineTo(250, 50);
kvadrat.lineTo(250, 250);
kvadrat.lineTo(50, 250);
kvadrat.lineTo(50, 50);
context.stroke(kvadrat);

krug = new Path2D();
krug.arc(150, 150, 70, 0, 2 * Math.PI);
context.fillStyle = "rgba(122, 250, 100, 0.5)";
context.fill(krug);