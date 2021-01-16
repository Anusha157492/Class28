class SlingShot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB
        }
        this.sling = Matter.Constraint.create(options)
        this.pointB = pointB;
        World.add(world, this.sling)
    }
    display() {

        if (this.sling.bodyA) {
            strokeWeight(3)
            line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.pointB.x, this.pointB.y)
        }
    }

    fly() {
        this.sling.bodyA = null
    }
}