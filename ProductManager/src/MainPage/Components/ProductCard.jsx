import '../Styles/ComponentStyles/ProductCardStyle.css'
import {Product} from '../Models/Product'

function ProductCard({imageRoute,product}) {
    console.log(imageRoute)
    return(
        <>
            <div className='card-container'>
                <img src={imageRoute} className='product-image'></img>
                <h1 className='product-name'>{product.name}</h1>
                <p className='price-tag'>prduct.price</p>  
            </div>
        </>
    )
}
export default ProductCard