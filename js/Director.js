//导演类

import {DataStore} from "./base/DataStore.js";

export class Director{

    static getInstance(){
        if(!Director.instance){
            Director.instance = new Director();
        }else {
            return Director.instance;
        }
    }

    constructor(){
        this.dataStore = DataStore.getInstance();
    }

    run(){
        this.dataStore.get('background').draw();

        this.dataStore.get('bullet').draw();
    }
}