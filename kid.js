class Kid{
    constructor(x,y,width,height,angle){
        var options={
            friction:0.4
        }
        this.image=loadImage("kid.jpg")
        this.body=Bodies.square(x,y,width.height.options);
        World.add(world,this.body)
    }
        display(){
            var pos=this.body.position;
            var angle=this.body.angle;
            push()
            translate (pos.x,pos.y);
            rotate (angle)
            imageMode(CENTER)
            image (this.image,0,0,width,height);
            pop ()
        }
}