class BOX{
    constructor(x,y,w,h){
        this.box = Bodies.rectangle(x,y,w,h);
    World.add(world,this.box);
    this.width = w;
    this.height = y;

    }

    display(){
        rect(this.box.position.x,this.box.position.y, this.width, this.height);
    }
}