import FilterSection from './Components/FiltersSection'
import ProductCard from './Components/ProductCard'
import './Styles/MainContent.css'
import { Product } from './Models/Product'
import ProductController from './Controllers/ProductController'
import { useEffect, useState } from 'react'
import { FoodTypes } from './Models/FoodTypes'

function LoadingContent() {
  return (
      <img src='/logo.png' className='loading-logo'></img>
  );
}

function MainContent() {
  let productController = new ProductController()

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pricelimit, setPriceLimit] = useState(20);
  const [foodType,setFoodtype] = useState(FoodTypes.all);
  
  function handleFilterItems(){
    return products.filter(
      (p)=>{
        const priceConstraint = p.price <=pricelimit;
        const typeConstraint = (foodType==FoodTypes.all) ? true: p.name.toUpperCase().includes(foodType)
        return priceConstraint && typeConstraint
      }
    ).map(p=><ProductCard key={p.id} product={p} imageRoute={p.img_route} ></ProductCard>)
  }
  

   useEffect(() => {
    ;(async () => {
      const result = await productController.loadProducts();
      setProducts(result);
      setLoading(false);
    })()
   }, []);

    return(
      <>
        <main className='main'>
          <aside className='main__filter'>
            <h1 className='tag-title__filter'>Productos</h1>
            <FilterSection onValueChanged={setPriceLimit} onFoodTypeChanged={setFoodtype}></FilterSection>
          </aside>
          <section className='main__showcase'>
            {
              loading ? (<LoadingContent></LoadingContent>): handleFilterItems(products,pricelimit)
            }        
          </section>
        </main>
      </>
    )
  } 
export default MainContent
