class Plinko{
constructor(x,y,r){
    var options={
        isStatic:true
    }
    this.x=x;
    this.y=y;
    this.body = Bodies.circle(x, y, this.r,options);     
    this.r=r;
    World.add(world, this.body);

}
display(){
    var pos = this.body.position;
       
    push();
    translate(pos.x, pos.y);
    rotate(angle)
    fill(this.color)
    ellipseMode(RADIUS);
    ellipse(0, 0, this.r,this.r);
    pop();
}



}