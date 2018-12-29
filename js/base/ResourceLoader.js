import {Resource} from "./Resource.js";

export class ResourceLoader {
    constructor(){
        this.map = new Map(Resource);
        for(let [key, value] of this.map){
            const image = new Image();
            image.src = value;
            this.map.set(key, image);
        }
    }

    onResourceLoaded(callback){
        let loadedNum = 0;
        for (let value of this.map.values()){
            value.onload = () => {
                loadedNum++;
                if(loadedNum >= this.map.size){
                    callback(this.map);
                }
            }
        }

    }


    static createResource(){
        return new ResourceLoader();
    }
}