import {OrderDetail} from './orderdetails';
import {Product} from './product';

export namespace BoyStore{
    export class ShoppingCart{
        constructor(public items:Array<OrderDetail> =[]){}
        public addItem(item: OrderDetail):{a: number, b:number};
        public addItem(product: Product, quantity:number):{a: number, b:number};
        public addItem(itemOrProduct: any, quantity?:number, total?:number):{a: number, b:number};
        public addItem(itemOrProduct: any, quantity?:number, total?:number):{a: number, b:number}{
                let item: OrderDetail;
                let tot: number;
            if(itemOrProduct instanceof OrderDetail){
                item = itemOrProduct;
            }else{
                item = new OrderDetail(itemOrProduct, quantity)
            }
            (total === 0) ? tot = 0 : tot = (item.product.priceInclVAT * item.quantity);
            /// need to continue extending this outputs!!!!!!!
            return {a: this.items.push(item), b:tot};
        }
    }
}