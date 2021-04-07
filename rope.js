class Rope{
    constructor(body1,body2,offsetX,offsetY)
    {
        this.offsetX=offsetX
        this.offsetY=offsetYvar options={
            bodyA:body1
            bodyB:body2
            pointB:{X:this.offsetX,y:this.offsetY}

        }
    }
}

rope1=new rope(bobObject.body,roofObject.body,-bobDiameter*2,0)
