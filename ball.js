class ball{
    constructor(x,y,r){
        var option={
            isStatic:false,
            density:1
        }
        this.body=Bodies.circle(x,y,r,option)
    World.add(myworld,this.body)
    this.r=r
    }
    display(){
        fill("blue")
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
    }
}