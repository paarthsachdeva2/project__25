class Box{
   constructor(x,y,width,height){
    var option ={
        isStatic:true,
    }
     
    this.image=loadImage("dustbingreen.png")
    this.body = Bodies.rectangle(x,y,width,height,option);
    this.width=width;
    this.height=height;
    

    World.add(world,this.body)

   }
    display(){

        var pos=this.body.position;
        push()
        translate(pos.x,pos.y);
        imageMode(CENTER)
        fill("blue")
        
        image(this.image,0,0,this.width,this.height)
        pop()

    }







}