class Sling {
    constructor(bodyAInput, pointBInput) {
        var options = {
            bodyA: bodyAInput,
            pointB: pointBInput,
            stiffness: 0.001,
            length: 10,
        }
        this.bodyA = bodyAInput;
        this.pointB = pointBInput;
        this.constraint = Constraint.create(options);
        World.add(userWorld,this.constraint);
    }
    attach(body) {
        this.constraint.bodyA = body;
    }

    detach() {
        this.constraint.bodyA = null;
      }

    display() {
        if(this.constraint.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointB;

            push();
            strokeWeight(2);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();
        }
    }
}