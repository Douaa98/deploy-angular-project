import { food } from "./food";
export class CartItem{
[x: string]: any;
    constructor(food:food){
        this.food=food
    }
    food:food ;
    quantity:number=1;

    get price():number{
        return this.food.price * this.quantity;
    }


}