let p = Array(6);


function setup() {
  createCanvas(500, 500);
  for (let i=0; i<6; i=i+1){
  p[i] = new Particle(250,250); //creates an object + original position
  }
}

function draw() {
  background(0);
  noStroke();
  fill("#edafb8");
  for (let i=0; i<6; i=i+1)
    {
    p[i].draw();
    }
  
}

class Particle //serves a model to create objects
    {
      constructor (x,y) //blueprint to create objects
      {
        this.x = x;
        this.y = y;
        this.vx = random (-2,2); //velocity in x direction
        this.vy = random (-2,2); //velocity in y direction
        
      }
      
      draw()
      {
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;

        if (this.x<0 || this.x>width || this.y < 0 || this.y>height){
          this.x = random(0,width);
          this.y = random(0,height);
        } 

        circle(this.x,this.y,5);
      }
    }