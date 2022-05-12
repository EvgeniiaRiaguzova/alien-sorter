const myGameArea = {
    canvas: document.getElementById("canvas"),
    ctx: canvas.getContext("2d"),
    start: function () {
     const imgSpace = new Image();
  imgSpace.src = "img/Space.jpeg";
  imgSpace.onload = () => {                                                   
    this.ctx.drawImage(imgSpace,0,0,600,700)}
    const imgPurpPlanet = new Image();
  imgPurpPlanet.src = "img/purple-planet.jpeg";
  imgPurpPlanet.onload = () => {                                                   
    this.ctx.drawImage(imgPurpPlanet,0,350,200,150)}
    const imgYellowPlanet = new Image();
    imgYellowPlanet.src = "img/yellow-planet2.webp";
    imgYellowPlanet.onload = () => {                                                   
    this.ctx.drawImage(imgYellowPlanet,400,350,200,150)} 
   // this.interval = setInterval(updateGameArea, 20); 
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      },
    stop: function () {
        clearInterval(this.interval);
      },
  };
  myGameArea.start()
  
class Component {
    constructor(src, x, y, width, height ) {
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.speedX = 0;
      this.speedY = 0;
      this.img= new Image();
      this.img.src=src;
      this.img.onload= () => {                                                   
        myGameArea.ctx.drawImage(this.img,this.x, this.y, this.width, this.height)}
    }
    update() {
        const ctx = myGameArea.context;
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      }
}

document.getElementById("start-button").onclick = function () {
const yellowAlien= new Component("img/yellow alien.png",300,0,80,100)
const purpAlien= new Component("img/purple-alien.jpg",200,0,80,100)  
}


    