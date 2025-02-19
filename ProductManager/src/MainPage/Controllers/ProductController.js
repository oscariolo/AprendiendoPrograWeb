import { useState } from "react";
import { Product } from "../Models/Product";
import { FoodTypes } from "../Models/FoodTypes";

const url = ' http://localhost:8000/api/'

class ProductController{

    constructor(){
        this.productList = []
    }
    
    async loadProducts(){
        try{
            let request = await fetch('http://localhost:8000/api/products/all/');
            let response = await request.json();
            this.productList = response.map(p=>Product.fromJSON(p))
        }catch(err){
            console.log(er)
            this.productList = []
        }
    }

    handleFilterItems(pricelimit,foodType){
        const filteredProducts = this.productList.filter(
            (p)=>{
            const priceConstraint = p.price <=pricelimit;
            const typeConstraint = (foodType==FoodTypes.all) ? true: p.name.toUpperCase().includes(foodType)
            return priceConstraint && typeConstraint
            }
        )
        return filteredProducts
    }
}
export default ProductController;