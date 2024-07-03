class Product{
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    diplayProduct(){
        console.log(`product: ${this.name}`)
        console.log(`price: $${this.price}`)
        console.log(`quantity: ${this.quantity}`)
    }

    calucTolt(salesTax){
        return this.price + (this.price * salesTax);

    }
}

const slalesTax = 0.05;
const product1 = new Product("iphone", 1150.55, 10);
const product2 = new Product("3D Prints", 100, 10);
const product3 = new Product("Underware", 100, 10);
const product4 = new Product("Weed", 120, 10);

product1.diplayProduct();
product2.diplayProduct();
product3.diplayProduct();
product4.diplayProduct();

const total1 = product1.calucTolt(slalesTax);
console.log(`Total price (with tax): $${total1.toFixed(2)}`);
const total2 = product2.calucTolt(slalesTax);
console.log(`Total price (with tax): $${total2.toFixed(2)}`);
const total3 = product3.calucTolt(slalesTax);
console.log(`Total price (with tax): $${total3.toFixed(2)}`);
const total4 = product4.calucTolt(slalesTax);
console.log(`Total price (with tax): $${total4.toFixed(2)}`);