class Link{
    constructor(bodyA,bodyB)
    //giving the base functions without value
    {
      var lastlink = bodyA.body.bodies.length-2;
     this.link = Constraint.create(
        {
          bodyA:bodyA.body.bodies[lastlink],
          pointA:{x:0,y:0},
          bodyB:bodyB,
          pointB:{x:0,y:0},
          length:-10,
          stiffness:0.01
        });
        World.add(engine.world,this.link);
    } 
    //creating detach to break the link
    detach(){
    World.remove(engine.world,this.link);  
    }

}

