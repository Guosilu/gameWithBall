

import {Main} from "./Main.js";


    new Main();

    // var ctx = document.getElementById('canvas');
    // var start = ctx.getContext('2d');

    // requestAnimationFrame(run(0));
    //
    //
    // function run(a) {
    //     a++
    //     let image = createImg('image/bullet.png');
    //     console.log(image);
    //     image.onload = function () {
    //         canvas.drawImage(image,0,0,image.width,image.height,a,a,image.width,image.height);
    //     }
    //     if(a>window.innerWidth){
    //         a=0;
    //     }
    //
    //     requestAnimationFrame(run(a));
    // }

    function createImg(src){
        var img = new Image();
        img.src=src;
        return img;
    }

