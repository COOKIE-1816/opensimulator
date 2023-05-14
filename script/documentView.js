let DocumentView = {
    grid_draw: function(size) {
        //size = size * 3.78;

        let canvas = document.getElementById("document");
        let ctx = canvas.getContext("2d");

        let width = canvas.width;
        let height = canvas.height;

        ctx.scale(0.5, 0.5);

        ctx.strokeStyle = "#00ff0044";
        ctx.lineWidth = 0.7;

        for(let x = 0; x <= width * 2; x += size) {
            ctx.beginPath();

            ctx.moveTo(x, 0);
            ctx.lineTo(x, height * 2);

            ctx.stroke();
        }

        for(let y = 0; y <= height * 2; y += size) {
            ctx.beginPath();

            ctx.moveTo(0, y);
            ctx.lineTo(width * 2, y);

            ctx.stroke();
        }
    }
}
