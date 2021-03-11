class Box extends Baseclass
{
  constructor(x,y){
 
    super(x,y,30,50);
    this.Visiblity = 255;
 
    
  }
  display(){
    console.log(this.body.speed);
    if(this.body.speed < 3){
    super.display();
    }
    else{
      World.remove(world,this.body);
      push()
      this.Visiblity = this.Visiblity-5
      tint(255,this.Visiblity);
      pop();
     
    }
  }
  score1(){
    if(this.Visiblity = this.Visiblity-5){
   score = score + 1
    }
  }
}