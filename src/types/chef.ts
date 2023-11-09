import { Restaurant } from "./restaurant";

export class Chef{
    name: string;
    pic: string;
    about: string;
    restaurant: Restaurant[];
    

    constructor(name: string, pic: string, about: string, restaurant: Restaurant[]){
        this.name= name;
        this.pic= pic;
        this.about= about;
        this.restaurant= restaurant;


    }
}