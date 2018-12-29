
import {ResourceLoader} from "./base/ResourceLoader.js";
import {DataStore} from "./base/DataStore.js";

export class Main {
    constructor(){

        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext('2d');

        this.DataStore = DataStore.getInstance();

        const loader = ResourceLoader.createResource();
        loader.onResourceLoaded(map => this.onResourceFirstLoaded(map))
    }

    onResourceFirstLoaded(map){
        this.DataStore.put('key','value');
        console.log(this.DataStore.get('key'))
        this.DataStore.delete("key")
        console.log(this.DataStore.get('key'))
    }
}