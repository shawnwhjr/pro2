class Ground{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
        this.w=w;
        this.h=h;
        this.body=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body)
    }
    display(){
        var p=this.body.position
        push() 
        translate(p.x,p.y)
        rotate(this.body.angle)
        fill("green")
        rectMode(CENTER)
        rect(0,0,w,h)
        pop()
    }
}