const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
// var player 
var player;

// var alien
var alien;

// var wall
var wall1,wall2,wall3,wall4;

// var obstacle
var obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6,obstacle7,obstacle8,obstacle9;
var obstacle10,obstacle11,obstacle12,obstacle13,obstacle14,obstacle15,obstacle16,obstacle17,obstacle18,obstacle19;

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

// walls 

   wall1 = new Wall(500,390,1000,20);
   wall2 = new Wall(500,10,1000,20); 
   wall3 = new Wall(10,10,20,800);
   wall4 = new Wall(990,10,20,800);

// obstacles

   obstacle1 = new Obstacle(850,10,20,350);
   obstacle2 = new Obstacle(600,10,20,500);
   obstacle3 = new Obstacle(500,330,300,20);
   obstacle4 = new Obstacle(360,200,150,20);
   obstacle5 = new Obstacle(70,400,20,400);
   obstacle6 = new Obstacle(500,200,20,280);
   obstacle7 = new Obstacle(400,70,20,390);
   obstacle8 = new Obstacle(500,80,80,20);
   obstacle9 = new Obstacle(770,250,200,20);
   obstacle10 = new Obstacle(770,200,20,80);
   obstacle11 = new Obstacle(770,300,20,80);
   obstacle12 = new Obstacle(990,330,200,20);
   obstacle13 = new Obstacle(720,100,150,20);
   obstacle14 = new Obstacle(950,130,100,20); 
   obstacle15 = new Obstacle(150,130,100,20);
   obstacle16 = new Obstacle(300,100,20,100);
   obstacle17 = new Obstacle(200,200,20,200);
   obstacle18 = new Obstacle(250,260,20,200);
   obstacle19 = new Obstacle(90,50,100,20);

   // player
     player = new Player(340,180);

  // alien
     alien = new Alien(550,310);
}


function draw(){
    background(0);
    Engine.update(engine);

// wall display
    wall1.display();
    wall2.display();
    wall3.display();
    wall4.display();

// obstacles display
    obstacle1.display();
    obstacle2.display();
    obstacle3.display();
    obstacle4.display();
    obstacle5.display();
    obstacle6.display();
    obstacle7.display();
    obstacle8.display();
    obstacle9.display();
    obstacle10.display();
    obstacle11.display();
    obstacle12.display();
    obstacle13.display();
    obstacle14.display();
    obstacle15.display();
    obstacle16.display();
    obstacle17.display();
    obstacle18.display();
    obstacle19.display();

// player display
    player.display();


// alien display
   alien.display();
   }

function keyPressed(){
    if (keyCode === 40){
        player.y = player.y - 10;   
    }

    if (keyCode === 38){
        player.y = player.y + 10;
    }
};
