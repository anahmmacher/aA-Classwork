export default class Bird {
  constructor(dimX, dimY) {
    this.x = Math.floor(dimX/3);
    this.y = Math.floor(dimY/2);
    this.velocity = 0;
  }

  drawBird(ctx){
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.x, this.y, 40, 30);
  }

  animate(ctx){
    this.drawBird(ctx);
  }
}
