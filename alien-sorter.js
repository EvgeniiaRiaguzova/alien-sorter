const myGameArea = {
  canvas: document.getElementById('canvas'),
  ctx: canvas.getContext('2d'),
  fail: 0,
  score: 0,
  update: function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawBackground();
    if (this.yellowAlien !== undefined) {
      this.yellowAlien.update();
    }
    if (this.purpAlien !== undefined) {
      this.purpAlien.update();
    }
    
    //this.interval=requestAnimationFrame(() => this.update());
  },

  start: function () {
    this.imgSpace = new Image();
    this.imgSpace.src = 'img/Space.jpeg';
    this.imgSpace.onload = () => {
      this.ctx.drawImage(this.imgSpace, 0, 0, 600, 700);
    };

    this.imgPurpPlanet = new Image();
    this.imgPurpPlanet.src = 'img/purple-planet.jpeg';
    this.imgPurpPlanet.onload = () => {
      this.ctx.drawImage(this.imgPurpPlanet, 0, 350, 200, 150);
    };

    this.imgYellowPlanet = new Image();
    this.imgYellowPlanet.src = 'img/yellow-planet2.webp';
    this.imgYellowPlanet.onload = () => {
      this.ctx.drawImage(this.imgYellowPlanet, 400, 350, 200, 150);
    };
    this.alienGenerator();
    this.interval= setInterval(() => this.update(), 20)
  },

  alienGenerator: function () {
    console.log('alienDNA');
    let alienDNA = Math.floor(Math.random() * 10);

    if (alienDNA % 2 == 0) {
      console.log(alienDNA);
      this.yellowAlien = new Component(
        'img/yellow alien.png',
        300,
        0,
        80,
        100,
        'yellow'
      );
      return
    } else {
      console.log('purp' + alienDNA);
      this.purpAlien = new Component(
        'img/purple-alien.jpg',
        200,
        0,
        80,
        100,
        'purple'
      );
      return
    }
  },

  drawBackground: function () {
    this.ctx.drawImage(this.imgSpace, 0, 0, 600, 700);
    this.ctx.drawImage(this.imgPurpPlanet, 0, 350, 200, 150);
    this.ctx.drawImage(this.imgYellowPlanet, 400, 350, 200, 150);
  },

  stop: function () {
    console.log('test');
    console.log(this.interval);
    clearInterval(this.interval)
    //cancelAnimationFrame(this.interval);
  },
};

document.getElementById('start-button').onclick = () => {
  /* this.interval = setInterval(this.alienGenerator, 20);
  if (this.update == undefined) {
    return;
  }
  this.alienGenerator();
  this.update();*/
  myGameArea.start();
};
class Component {
  constructor(src, x, y, width, height, type) {
    this.canvas = myGameArea.canvas;
    this.imgPurpPlanet = myGameArea.imgPurpPlanet;
    this.width = width;
    this.height = height;
    this.type = type;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 1;
    this.img = new Image();
    this.img.src = src;
    this.img.onload = () => {
      myGameArea.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.width,
        this.height
      );
    };
  }
  update() {
    const ctx = myGameArea.ctx;
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    this.y += this.speedY;
    this.x += this.speedX;
    document.onkeydown = (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          this.setSpeedX(this.getSpeedX() - 1);
          this.setSpeedY(this.getSpeedY() + 1);
          break;
        case 'ArrowRight':
          this.setSpeedX(this.getSpeedX() + 1);
          this.setSpeedY(this.getSpeedY() + 1);
          break;
        default:
          break;
      }
    };
    /*if (
      (this.y + this.height > this.canvas.height - 150 &&
        this.x < this.canvas.width - 400) ||
      (this.y + this.height > this.canvas.height - 150 &&
        this.x + 80 > this.canvas.width - 200)
    ) {console.log("111")
      ctx.clearRect(this.x, this.y, 80, 100);
      myGameArea.drawBackground();
    } */

    this.collision();
  }

  /*score() {
    if (
      this.purpAlien.y + this.purpAlien.height > this.canvas.height - 150 &&
      this.purpAlien.x < this.canvas.width - 400
    ) {
      this.score += 1;
    }
    if (
      this.yellowAlien.y + this.yellowAlien.height > this.canvas.height - 150 &&
      this.yellowAlien.x + 80 > this.canvas.width - 200
    ) {
      this.score += 1;
    }
  }*/

  collision() {
    if (
      this.y + this.height > this.canvas.height - 150 &&
      this.x < this.canvas.width - 400
    ) {
      if (this.type == 'yellow') {
        /* myGameArea.ctx.fillStyle = 'rgba(249,14,14,0.5)';
        myGameArea.ctx.fillRect(0, 350, 200, 150);*/
        myGameArea.ctx.clearRect(this.x, this.y, 80, 100);
        myGameArea.drawBackground();
        
        myGameArea.fail += 1;
        myGameArea.alienGenerator();
        return
      } else {
        myGameArea.score += 1;
        document.getElementById("score").innerHTML=myGameArea.score;
        myGameArea.ctx.clearRect(this.x, this.y, 80, 100);
        myGameArea.drawBackground();
        myGameArea.alienGenerator();
        return
      }
      //myGameArea.alienGenerator();
      
    } else if (this.y == this.canvas.height) {
      myGameArea.ctx.clearRect(this.x, this.y, 80, 100);
      myGameArea.drawBackground();
      myGameArea.alienGenerator();
      return
    } else if (
      this.y + this.height > this.canvas.height - 150 &&
      this.x + 80 > this.canvas.width - 200
    ) {
      if (this.type == 'purple') {
        /* myGameArea.ctx.fillStyle = 'rgba(249,14,14,0.5)';
       myGameArea.ctx.fillRect(0, 350, 200, 150);*/
        myGameArea.ctx.clearRect(this.x, this.y, 80, 100);
        myGameArea.drawBackground();
        myGameArea.fail += 1;
        myGameArea.alienGenerator();
        return
      } else {
        myGameArea.score += 1;
        document.getElementById("score").innerHTML=myGameArea.score;
        myGameArea.ctx.clearRect(this.x, this.y, 80, 100);
        myGameArea.drawBackground();
        myGameArea.alienGenerator();
        return
      }
      //myGameArea.alienGenerator();
      
    }
    if (myGameArea.fail > 3) {
      
      myGameArea.ctx.font = '44px Bradley Hand';
      myGameArea.ctx.fillText('Game over', 200, 200);
      myGameArea.ctx.fillStyle = 'rgb(209, 238, 95)';
      myGameArea.stop();
      alert(
        `Congrats! ${myGameArea.score} aliens successfully reached their planet.`
      );
      
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
