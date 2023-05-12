let DocumentView = {
    grid_draw: function(size) {
        /*size = size * 3.78;

        let canvas = document.getElementById("document");
        let context = canvas.getContext("2d");


        for(let x = 0; x <= size; x += 30) {
            context.moveTo(0.5 + x, 0);
            context.lineTo(0.5 + x, size);
        }

        for(let x = 0; x <= size; x += 30) {
            context.moveTo(0, 0.5 + x);
            context.lineTo(size, 0.5 + x);
        }

        context.strokeStyle = "black";
        context.stroke();*/

        //size = size * 2;

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
