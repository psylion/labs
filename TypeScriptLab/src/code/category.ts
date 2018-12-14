import { Product } from "./product";

export class Category{
    constructor(public id:number, public name:string, public description:string,public products:Array<Product>=[]){}
}

export class SubCategory extends Category{
    constructor( id:number,  name:string,  description:string, products:Array<Product>=[]){
        super(id, name,description,products);
    }
}