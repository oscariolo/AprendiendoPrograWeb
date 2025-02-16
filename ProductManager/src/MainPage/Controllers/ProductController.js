import { useState } from "react";

const url = ' http://localhost:8000/api/'

class ProductController{
    
    async loadProducts(){
        try{
            let request = await fetch('http://localhost:8000/api/products/all/');
            let response = request.json();
            return response;
        }catch(err){
            return [];
        }
    }
}
export default ProductController;