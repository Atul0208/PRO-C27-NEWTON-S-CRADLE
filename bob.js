class bob {
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:1,
            frictio:0,
            density:7
        }
        this.x=x;
        this.y=y;
     this.radius=radius;
        this.body=Bodies.circle(x,y,radius,options)
      
     
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        strokeWeight(2);
        fill(255,0,255);
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,this.radius);
    }
}
