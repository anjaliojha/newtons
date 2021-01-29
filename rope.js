class Rope{
    constructor(pointA,bodyB){
    var options = {
        pointA: pointA,
        bodyB: bodyB,
        stiffness: 0.5,
        length: 7
    }
    this.pointA = pointA;
    this.bodyB = bodyB;
    this.rope = Constraint.create(options);
    World.add(world,this.rope);
    }

    display(){
      push();
      stroke("black");
      fill("black");
      line(this.pointA.x,this.pointA.y,this.bodyB.x,this.bodyB.y);
      pop();
    }
}