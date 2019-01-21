import {Sprite} from "../base/Sprite.js";
import {Director} from "../Director.js";

export class Bullet extends Sprite{

    constructor(){
        const image = Sprite.getImage('bullet');
        super(image,
            0,0,
            image.width,image.height,
            0,0,
            image.width,image.height);

        this.speed = Director.getInstance().speed;
        this.landY = 0;
    }

    draw(){
        this.landY = this.landY + this.speed;
        console.log(this.landY);
        if(this.landY >= window.innerHeight-this.img.height){
            this.landY = window.innerHeight-this.img.height;
        }

        super.draw(this.img,
            this.srcX,
            this.srcY,
            this.srcW,
            this.srcH,
            this.x,
            this.landY,
            this.width,
            this.height);
    }
}