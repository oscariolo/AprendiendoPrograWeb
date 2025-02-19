export class Product{
    constructor(id,name,description,quantity,price,img_route){
        this.id = id,
        this.name=name,
        this.description=description,
        this.quantity=quantity,
        this.price=price
        this.img_route=img_route
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
        let newProduct = new Product(json.id,json.name,json.description,json.quantity,json.price,json.img_route)
        return newProduct
    }
}