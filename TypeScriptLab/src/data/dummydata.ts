import {Category} from '../code/category';
import {Product} from '../code/product';

export namespace DummyData{
    export let categories: Array<Category> =[
        new Category(1, 'Laptop','Mobile computer for mobile users'),
        new Category(2, 'MotorBike', 'Vehicule for mobile users'),
        new Category(3, 'NightLife', 'Everything for clubbers')
    ];
    categories[0].products=[
        new Product(1,'Lenovo Yoga', 949.95 , "Light laptop"),
        new Product(1,'HP Pavilion', 1249.95, "Heavy Laptop"),
        new Product(1,'MacBook Ultra', 1459.95, "RollRoyce laptop")
    ];
    categories[1].products=[
        new Product(1,'BMW', 1949.95 , "it's for racing"),
        new Product(2,'Cagiva', 1849.95, "it's for showing"),
        new Product(3,'Thiumph', 2659.95, "Don't drive this")
    ];
    categories[2].products=[
        new Product(1,'Coat', 49.95 , "in case of cold"),
        new Product(2,'umbrella', 9.95, "In case of rain"),
        new Product(3,'Bedroom', 59.95, "always need to rest")
    ];
}