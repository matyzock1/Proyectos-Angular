
interface Product {
    description:string;
    price:number;
}

interface TaxCalculationOptions{
    tax: number;
    products: Product[]
};

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
};

const tablet: Product = {
    description: 'Airpad Air',
    price: 250.0
};

function taxCalculation( options:TaxCalculationOptions ):[number, number] {

    let total = 0;

    options.products.forEach(({ price }) => {
        total += price;
    });

    return [total, total * options.tax]
};

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, totalTax] = taxCalculation({
    products: shoppingCart,
    tax: tax,
});

console.log("Total: ", total);
console.log("Tax: ", totalTax);


export {};