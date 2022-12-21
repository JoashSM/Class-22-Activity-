class Cannon{
    constructor(x,y,w,h,angle){
        this.x=x;
        this.y=y;
        this.width=w;
        this.height=h;
        this.angle=angle;
        this.cannonImg = loadImage("assets/canon.png");
        this.cannonbaseImg = loadImage("assets/cannonBase.png");

    }

    display(){
        //cannon top
        push();
        imageMode(CENTER);
        image(this.cannonImg,this.x,this.y,this.width,this.height,this.angle)
        pop();
        //cannon base
        image(this.cannonbaseImg,70,20,200,200);
        noFill();
    }
}