class Ball{
    constructor(x,y,r){
        var options={
            isStatic:false
        }
        this.r=r;
        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this.body)
    }
    display(){
        var p=this.body.position
        push() 
        translate(p.x,p.y)
        rotate(this.body.angle)
        fill("blue")
        ellipseMode(CENTER)
        ellipse(0,0,r,r)
        pop()
    }
}