class Wall{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':true
        }
       
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
        this.width = width;
        this.height = height;
      }

      display(){
        rectMode(CENTER);
        fill("blue");
        rect(this.body.position.x, this.body.position.y,this.width, this.height);
      }
};