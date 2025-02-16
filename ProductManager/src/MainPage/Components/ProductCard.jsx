import '../Styles/ComponentStyles/ProductCardStyle.css'
import {Product} from '../Models/Product'

function ProductCard({imageRoute='/cafe.jpg',product=new Product(0,"name","desc",0,0)}) {

    return(
        <>
            <div className='card-container'>
                <img src={imageRoute} className='product-image'></img>
                <h1 className='product-name'>{product.name}</h1>
                <div className='product-buy'>
                    <button className='product-buy__button'>Reservar</button>
                    <p className='product-buy__price-tag'>{product.price + '$'}</p>  
                </div>
            </div>
        </>
    )
}
export default ProductCard