let Simulation = {};

Simulation.IDLE = 0;
Simulation.PENDING = 1;
Simulation.RUNNING = 2;
Simulation.PAUSED = 3
Simulation.STOPPING = 4;
Simulation.CRITICAL = 5;


Simulation.status = Simulation.IDLE;
Simulation.time = 0.0000000;