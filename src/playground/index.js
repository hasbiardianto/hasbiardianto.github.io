var windowWidth = screen.width;

// module aliases
var Matter = window.Matter;
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    canvas: document.getElementById(
        "matter-canvas",
    ),
    engine: engine,
    options: {
        width: windowWidth,
        wireframes: false,
        background: "#ffffff00",
    },
});

// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80, 80, {
    render: {
        fillStyle: "red",
    },
});
var boxB = Bodies.rectangle(450, 50, 80, 80);
var ground = Bodies.rectangle(640, 610, windowWidth, 60, {
    isStatic: true,
});

// add all of the bodies to the world
Composite.add(engine.world, [boxA, boxB, ground]);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);