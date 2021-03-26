class rope{
    constructor(obj1,point2){
        var options={
            bodyA: obj1,
            pointB: point2,
            length:100,
            stiffness:1
            }
            
             this.chain=Constraint.create(options)
            World.add(myworld,this.chain);
    }
    
    
    display(){
    
        push()
        strokeWeight(10)
        stroke(48,22,8)
       line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y)
     pop()
    }    
    
    }