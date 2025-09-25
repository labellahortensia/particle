let p;


function setup() {
  createCanvas(500, 500);
  p = new Particle(250,250);
}

function draw() {
  background(0);
  p.draw();
  
  
}

class Particle //serves a model to create objects
    {
      constructor (x,y)
      {
        this.x = x;
        this.y = y;
        this.vx = random (-2,2);
        this.vy = random (-2,2);
        
      }
      
      draw()
      {
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
        circle(this.x,this.y,5);
      }
    }