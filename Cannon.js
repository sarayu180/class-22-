class Cannon{
    constructor(x,y,width,height,angle){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.cannon_base = loadImage("./assets/cannonBase.png")
        this.cannon_top = loadImage("./assets/canon.png")
    }

    display(){
        // code to create cannon top
        push()
       // rectMode(CENTER)
        //rect(this.x,this.y,this.width,this.height)
        imageMode(CENTER)
        image(this.cannon_top,this.x,this.y,this.width,this.height)
        pop()

        // code to create cannon base
        //rect(70,20,200,200)
        image(this.cannon_base,70,35,200,200)
        noFill()
    }
}