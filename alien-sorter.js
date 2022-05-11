const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d")

  const imgSpace = new Image();
  imgSpace.src = "img/Space.jpeg";
  imgSpace.onload = () => {                                                   
    ctx.drawImage(imgSpace,0,0,600,700)}

  const imgPurpPlanet = new Image();
  imgPurpPlanet.src = "img/purple-planet.jpeg";
  imgPurpPlanet.onload = () => {                                                   
    ctx.drawImage(imgPurpPlanet,0,350,200,150)}

    const imgYellowPlanet = new Image();
    imgYellowPlanet.src = "img/yellow-planet2.webp";
    imgYellowPlanet.onload = () => {                                                   
    ctx.drawImage(imgYellowPlanet,400,350,200,150)}

    const imgYellowAlien = new Image();
    imgYellowAlien.src = "img/yellow alien.png";
    imgYellowAlien.onload = () => {                                                   
    ctx.drawImage(imgYellowAlien,300,0,80,100)}

    const imgPurpAlien = new Image();
    imgPurpAlien.src = "img/purple-alien.jpg";
    imgPurpAlien.onload = () => {                                                   
    ctx.drawImage(imgPurpAlien,200,0,80,100)}