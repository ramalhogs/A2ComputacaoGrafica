document.addEventListener('DOMContentLoaded', () => {

    const tela = document.querySelector('#tela');
    const contexto = tela.getContext('2d')

    tela.width = 1000;
    tela.height = 800;

    var x = [];
    var y = [];

    for (var i = 0; i < 8; i++) {
        contexto.beginPath();
        x.push(Math.random() * (999 - 1) + 1);
        y.push(Math.random() * (799 - 1) + 1);
        contexto.arc(x[i], y[i], 3, 0, 2 * Math.PI);
        contexto.fill();
    }

    var x1, y1, x2, y2, dist = 1300;

    for (var j = 0; j < 8; j++) {
        for (var k = 0; k < 8; k++) {
            if (j != k) {
                var a = x[k] - x[j];
                var b = y[k] - y[j];
                var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
                if (c <= dist) {
                    x1 = x[j];
                    y1 = y[j];
                    x2 = x[k];
                    y2 = y[k];
                    dist = c;
                }
            }
        }
    }
    var delayInMilliseconds = 1000; //1 second
    setTimeout(function () {
        contexto.beginPath();
        contexto.moveTo(x1, y1);
        contexto.lineTo(x2, y2);
        contexto.stroke();
    }, delayInMilliseconds);

    console.log(x, y);
});