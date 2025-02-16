export class Product{
    constructor(id,name,description,quantity,price){
        this.id = id,
        this.name=name,
        this.description=description,
        this.quantity=quantity,
        this.price=price
    }

    toJSON(){
        return {
            id:this.id,
            name:this.name,
            description:this.description,
            quantity:this.quantity,
            price:this.price
        }
    }

    static fromJSON(json){
        let newProduct = new Product(json.id,json.name,json.description,json.quantity,json.price)
        return newProduct
    }
}