


export class DataStore {
    static getInstance(){
        if(!DataStore.instance){
            DataStore.instance = new DataStore();
        }
        return DataStore.instance;
    }

    constructor(){
        this.map = new Map();
    }

    put(key,value){
        this.map.set(key,value);
        return this;
    }

    get(key){
        return this.map.get(key);
    }

    delete(key){
        this.map.delete(key)
        return this;
    }

}