
import {ResourceLoader} from "./base/ResourceLoader.js";
import {DataStore} from "./base/DataStore.js";
import {Director} from "./Director.js";
import {BackGround} from "./runtime/BackGround.js";

export class Main {
    constructor(){

        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext('2d');

        this.dataStore = DataStore.getInstance();

        const loader = ResourceLoader.createResource();
        loader.onResourceLoaded(map => this.onResourceFirstLoaded(map))

        Director.getInstance();

    }

    onResourceFirstLoaded(map){
        this.dataStore.ctx = this.ctx;
        this.dataStore.res = map;
        this.init();

    }
    init(){
        this.dataStore
            .put('background', BackGround);

        Director.getInstance().run();

    }
}