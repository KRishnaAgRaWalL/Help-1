class Box{
    constructor(){
        var options ={
        'isStatic':false,
        'restitution':0.0,
        'density':1.0,
        'friction':0.0
        }
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        this.width = this.width;
        this.height = this.height;
        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;

        push();
       // translate(pos.x,pos.y);
        strokeWeight(5);
        fill(this.color);
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
}