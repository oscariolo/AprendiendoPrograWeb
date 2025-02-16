import FilterSection from './Components/FiltersSection'
import ProductCard from './Components/ProductCard'
import './Styles/MainContent.css'
import { Product } from './Models/Product'
import ProductController from './Controllers/ProductController'
import { useEffect, useState } from 'react'

/*temporal*/


function MainContent() {
  let productController = new ProductController()

  const [products, setProducts] = useState([]);

   useEffect(() => {
    ;(async () => {
      const result = await productController.loadProducts()
      setProducts(result)
    })()
   }, []);

    return(
      <>
        <main className='main'>
          <aside className='main__filter'>
            <h1 className='tag-title__filter'>Productos</h1>
            <FilterSection></FilterSection>
          </aside>
          <section className='main__showcase'>
            {
              products.map(p=><ProductCard key={p.id} product={p} imageRoute={p.img_route} ></ProductCard>)
            }
          </section>
        </main>
      </>
    )
  
  }
export default MainContent