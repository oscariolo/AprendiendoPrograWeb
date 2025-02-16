export class Product{
    constructor(id,name,description,quantity,price){
        this.id = id,
        this.name=name,
        this.description=description,
        this.quantity=quantity,
        this.price=price
    }

    toJSON(product){
        return {
            id:this.id,
            name:this.name,
            description:this.description,
            quantity:this.quantity,
            price:this.price
        }
    }

    fromJSON(json){
        this.id=json.id,
        this.name=json.name,
        this.description=json.description,
        this.quantity=json.quantity,
        this.price=json.price
    }
}