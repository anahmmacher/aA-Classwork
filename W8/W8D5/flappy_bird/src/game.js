import Bird from './bird';
import Level from './level';

export default class FlappyBird {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.restart();
  }

  animate(ctx){
    this.level.animate(ctx);
    this.bird.animate(ctx);
  }

  restart(){
    this.level = new Level(this.dimensions);
    this.bird = new Bird(this.dimensions.width, this.dimensions.height);
    this.animate(this.ctx);
  }
}