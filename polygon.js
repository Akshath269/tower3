class Polygon{
	constructor(x,y,r)
	{	
		
		this.body=Bodies.rectangle(x,y,r,r)
		this.r= r
		this.image=loadImage("polygon.png")
		World.add(world, this.body);
        
     
	}

	display()
	{
		var pos=this.body.position;	
		//fill("yellow")
		imageMode(CENTER);
		//ellipseMode(CENTER);
		image(this.image,pos.x,pos.y,this.r, this.r)
		
 }
}