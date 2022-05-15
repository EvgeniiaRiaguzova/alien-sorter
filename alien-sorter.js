const myGameArea = {
    canvas: document.getElementById("canvas"),
    ctx: canvas.getContext("2d"),
    start: function () {
     this.imgSpace = new Image();
  this.imgSpace.src = "img/Space.jpeg";
  this.imgSpace.onload = () => {                                                   
    this.ctx.drawImage(this.imgSpace,0,0,600,700)}

    this.imgPurpPlanet = new Image();
    this.imgPurpPlanet.src = "img/purple-planet.jpeg";
    this.imgPurpPlanet.onload = () => {                                                   
    this.ctx.drawImage(this.imgPurpPlanet,0,350,200,150)}

    this.imgYellowPlanet = new Image();
    this.imgYellowPlanet.src = "img/yellow-planet2.webp";
    this.imgYellowPlanet.onload = () => {                                                   
    this.ctx.drawImage(this.imgYellowPlanet,400,350,200,150)} 

    document.getElementById("start-button").onclick =() => {  
       this.interval = setInterval(alienGenerator, 20)
        function alienGenerator(){
        let alienDNA = Math.floor(Math.random() *10);
        if (alienDNA%2==0){
            this.yellowAlien= new Component("img/yellow alien.png",300,0,80,100);
        }
        else {this.purpAlien= new Component("img/purple-alien.jpg",200,0,80,100)
       }     
       this.update(); 
    }
    },
    drawBackground: function (){
        this.ctx.drawImage(this.imgSpace,0,0,600,700)
        this.ctx.drawImage(this.imgPurpPlanet,0,350,200,150)
        this.ctx.drawImage(this.imgYellowPlanet,400,350,200,150)
    },

    update: function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawBackground ()
        this.yellowAlien.update();
        this.purpAlien.update();
        requestAnimationFrame(()=>this.update())
      },

      

    stop: function () {
        clearInterval(this.interval);
      },
  };
  myGameArea.start()
  
class Component {
    constructor(src, x, y, width, height ) {
      this.canvas=myGameArea.canvas;
      this.imgPurpPlanet = myGameArea.imgPurpPlanet;
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.speedX = 0;
      this.speedY = 1;
      this.img= new Image();
      this.img.src=src;
      this.img.onload= () => {                                                   
        myGameArea.ctx.drawImage(this.img,this.x, this.y, this.width, this.height)}
    }
    update() {
        const ctx = myGameArea.ctx;
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        this.y +=this.speedY;
        this.x +=this.speedX;
        document.onkeydown = (event) => {
            switch (event.key) {
              case "ArrowLeft":
                  this.setSpeedX(this.getSpeedX() - 1);
                  this.setSpeedY(this.getSpeedY() + 1);
                break;
              case "ArrowRight":
                this.setSpeedX(this.getSpeedX() + 1);
                this.setSpeedY(this.getSpeedY() + 1);
                break;
              default:
                break;
            }
          };
          if((this.y+ this.height> this.canvas.height-150 && this.x <this.canvas.width-400)||
          (this.y+ this.height> this.canvas.height-150 && this.x+80>this.canvas.width-200)) {
              ctx.clearRect(this.x, this.y,80,100)
              myGameArea.drawBackground()
          }
      }
      setSpeedX(newSpeed) {
        this.speedX = newSpeed;
      }
      setSpeedY(newSpeed) {
        this.speedY = newSpeed;
      }
    
      getSpeedX() {
        return this.speedX;
      }
      getSpeedY() {
        return this.speedY;
      }
    
      setX(newX) {
        this.x = newX;
      }
      setY(newY) {
        this.Y = newY;
      }
    
      getX() {
        return this.x;
      }
      getY() {
        return this.Y;
      }
      
      }

      
      


      /*
      
      

      document.getElementById("start-button").onclick =() => {
        this.yellowAlien= new Component("img/yellow alien.png",300,0,80,100)
        this.purpAlien= new Component("img/purple-alien.jpg",200,0,80,100)  
    this.update();    
    }
      */




