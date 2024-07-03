class Product{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    diplayProduct(){
        console.log(`product: ${this.name}`)
        console.log(`price: $${this.price}`)
    }

    calucTolt(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const slalesTax = 0.05;
const product1 = new Product("iphone", 1150.55);
const product2 = new Product("3D Prints", 100);
const product3 = new Product("Uderwar", 100);

product1.diplayProduct();
product2.diplayProduct();
product3.diplayProduct();

const total1 = product1.calucTolt(slalesTax);
console.log(`Total price (with tax): $${total1.toFixed(2)}`);
const total2 = product2.calucTolt(slalesTax);
console.log(`Total price (with tax): $${total2.toFixed(2)}`);
const total3 = product3.calucTolt(slalesTax);
console.log(`Total price (with tax): $${total3.toFixed(2)}`);