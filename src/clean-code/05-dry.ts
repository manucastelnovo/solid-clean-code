class Product {
    constructor( public name:string) {}
}

(()=>{
    const bluePants = new Product(' blue large pants')
    console.log(bluePants);
})