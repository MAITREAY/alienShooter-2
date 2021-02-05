class Alien{
    constructor(x,y){
        var options = {
              'isStatic':true
          }
  
          this.body = Bodies.rectangle(x, y,20,20, options);
          World.add(world, this.body);
          this.width = 20;
          this.height = 20;
        }
  
        display(){
          rectMode(CENTER);
          fill("red");
          rect(this.body.position.x, this.body.position.y,this.width, this.height);
        }
}