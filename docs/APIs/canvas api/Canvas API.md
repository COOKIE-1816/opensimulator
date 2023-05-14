Canvas API is used to draw items (such as parts, shapes, painting, lines, text) to the [document]().
Everything is defined in `Canvas` class of [`/script/canvas.js`]() source file.

# Using Canvas API while simulation is running
While [simulation]() is running, Canvas API can be used, but everything rendered during simulation will be gone after simulation stops. To detect if simulation is running, read [`Simulation.status` variable](). If `Simulation.status == Simulation.IDLE || Simulation.status == Simulation.CRITICAL`, then simulation is running.

This is to prevent parts from using Canvas API while simulation is not running.

# Detect if rendering is in progress
If `Canvas.status == Canvas.BUSY`, Canvas is currently busy. That means, rendering is in progress.

# Basic Canvas API drawing functions
## `Canvas.drawLine()`
`Canvas.drawLine` is a function used to draw a line.

```js
// Definition
Canvas.drawLine = (
	line_color = Canvas.BLACK, 
	line_thickness = 1.00, 
	start_x, 
	start_y, 
	destination_x, 
	destination_y
) => {...};
```

Arguments:
* `line_color` (string) - defines line color using HEX code. Default is `Canvas.BLACK = "#000000"`.
* `line_thickness` - defines line thickness in range from 0.50 to 10.00. Default is 1.00.
* `start_x` - specify start position in *x* axis.
* `start_y` - specify start position in *y* axis.
* `destination_x` - specify end position in *x* axis.
* `destination_y` - specify end position in *y* axis.

```js
// Example: Draw a black line that starts on (2.00; 2.00), ends on (7.00; 2.00) and has thickness 1.00 using Canvas API.

Canvas.drawLine(Canvas.BLACK, 1.00, 2.00, 2.00, 7.00, 2.00);
```

## `Canvas.drawRectangle()`
`Canvas.drawRectangle` is a function to draw a rectangle.

```js
// Definition
Canvas.drawRectangle = (
	line_color = Canvas.BLACK,
	line_thickness = 1.00,
	x;
	y;
	a;
	b;
) => {...}
```

Arguments:
* `line_color` (string) - defines line color using HEX code. Default is `Canvas.BLACK = "#000000"`.
* `line_thickness` - defines line thickness in range from 0.50 to 10.00. Default is 1.00.
* `x` - specify position of rectangles *D* on *x* axis.
* `y` - specify position of rectangles *D* on *y* axis.
* `a` - size of `a`.
* `b` - size of `b`.

```js
// Example: Draw a black rectangle where a=21;b=5 on position x=4;y=7 with 0.5 thickness

Canvas.drawRectangle(Canvas.BLACK, 1.00, 4.00, 7.00, 21.00, 5.00);

/*
      |
      | x=4
      D                   C
------+-------------------+
 y=7  |                   |
      |                   | b=5
      |                   |
      +-------------------+
      A       a=21        B
*/
```

## `Canvas.drawSquare()`
`Canvas.drawSquare` is a function used to draw a square with drawing a rectangle where *a=b*.

```js
// Definition
Canvas.drawRectangle = (
	line_color = Canvas.BLACK,
	line_thickness = 1.00,
	x;
	y;
	a;
	b;
) => {...}
```

Arguments:
* `line_color` (string) - defines line color using HEX code. Default is `Canvas.BLACK = "#000000"`.
* `line_thickness` - defines line thickness in range from 0.50 to 10.00. Default is 1.00.
* `x` - specify position of rectangles *D* on *x* axis.
* `y` - specify position of rectangles *D* on *y* axis.
* `a` - size of `a`.

```js
// Example: Draw a black rectangle where a=5 on position x=4;y=7 with 0.5 thickness

Canvas.drawSquare(Canvas.BLACK, 0.50, 4.00, 7.00, 5.00);

/*
      |
      | x=4
      D    C
------+----+              (Even when it does not look like a square as a result of difference
 y=7  |    |               between height and width of characters, in canvas it actually
      |    | b=a=5         draws a square)
      |    |
      +----+
      A    B
       a=5
*/

```

```js
Canvas.drawSquare(Canvas.BLACK, 1.00, 4.00, 7.00, 5.00);
// is same as
Canvas.drawRectangle(Canvas.BLACK, 1.00, 4.00, 7.00, 5.00);

// Well, this is how Canvas.drawSquare works.
```