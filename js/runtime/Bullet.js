import {Sprite} from "../base/Sprite.js";

export class Bullet extends Sprite{

    constructor(){
        const image = Sprite.getImage('bullet');
        super(image,
            0,0,
            image.width,image.height,
            0,0,
            image.width,image.height);
    }
}