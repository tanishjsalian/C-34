class box{

    constructor(x,y){
        var options={
            restitution:0.5,
            friction:1
         
           }
         
           this.body=Bodies.rectangle(x,y,30,30,options);
           World.add(myworld,this.body)
           
    }

    display(){
 

        push()
        fill("lightblue")
        rectMode(CENTER)
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rect(0,0,30,30)
        pop()

}
}