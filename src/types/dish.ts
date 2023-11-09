export class Dish{
    name: string;
    pic: string;
    price: string;
    ingredients: string[];
    icons: string[];
    

    constructor(name: string, pic: string, price: string, ingredients: string[], icons: string[]){
        this.name= name;
        this.pic= pic;
        this.price= price;
        this.ingredients= ingredients;
        this.icons= icons;

    }
}