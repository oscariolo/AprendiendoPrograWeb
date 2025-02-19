import FilterSection from './Components/FiltersSection'
import ProductCard from './Components/ProductCard'
import './Styles/MainContent.css'
import ProductController from './Controllers/ProductController'
import { useEffect, useState, useRef } from 'react'
import { FoodTypes } from './Models/FoodTypes'

function LoadingContent() {
  return (
      <img src='/logo.png' className='loading-logo'></img>
  );
}

function MainContent() {
  const productController = useRef(new ProductController());

  const [loading, setLoading] = useState(true);
  const [pricelimit, setPriceLimit] = useState(20);
  const [foodType,setFoodtype] = useState(FoodTypes.all);

   useEffect(() => {
    ;(async () => {
      await productController.current.loadProducts();
      setLoading(false)
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
              loading ? (<LoadingContent></LoadingContent>): productController.current.handleFilterItems(pricelimit,foodType).map(p=><ProductCard key={p.id} product={p} imageRoute={p.img_route} ></ProductCard>)
            }        
          </section>
        </main>
      </>
    )
  } 
export default MainContent
