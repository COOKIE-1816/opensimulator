let Canvas = {};

Canvas.IDLE = 0;
Canvas.BUSY = 1;
Canvas.FAIL = 2;

Canvas.BLACK = "#000000";
Canvas.RED = "#ff0000";
Canvas.ORANGE = "#ffa2a2";
Canvas.YELLOW = "#ffff00";
Canvas.GREEN = "#00ff00";
Canvas.BLUE = "#0000ff";
Canvas.BROWN = "#fafa00";
Canvas.PURPLE = "#ff00dd";
Canvas.WHITE = "#ffffff";

Canvas.lastStatus = Simulation.IDLE;
Canvas.status = Canvas.IDLE;
Canvas.terminated = false;

Canvas.startDrawing = () => {
    Canvas.status = Canvas.BUSY;
};

Canvas.completeDrawing = () => {
    Canvas.status = Canvas.FAIL;
}

Canvas.terminate = () => {
    Canvas.terminated = true;
}

Canvas.drawLine = (
	line_color = Canvas.BLACK, 
	line_thickness = 1.00, 
	start_x, 
	start_y, 
	destination_x, 
	destination_y
) => {
    try {

    } catch(err) {
        Canvas.terminate();
        Canvas.status = Canvas.FAIL;

        log(err, "Canvas", ERROR, Simulation.time);
    }
};