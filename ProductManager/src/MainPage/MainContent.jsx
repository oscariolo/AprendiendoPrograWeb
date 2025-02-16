import FilterSection from './Components/FiltersSection'
import ProductCard from './Components/ProductCard'
import './Styles/MainContent.css'
import { Product } from './Models/Product'

/*temporal*/


function MainContent() {
  let test = new Product(1,'testname','asdasda',12,10)

    return(
      <>
        <main className='main'>
          <aside className='main__filter'>
            <h1 className='tag-title__filter'>Productos</h1>
            <FilterSection></FilterSection>
          </aside>
          <section className='main__showcase'>
            <ProductCard imageRoute={'/cafe.jpg'} product={test}></ProductCard>
            <ProductCard imageRoute={'/cheesecake_mint_blue.jpg'} product={test}></ProductCard>
            <ProductCard imageRoute={'/cheesecake_mora.jpg'} product={test}></ProductCard>
            <ProductCard imageRoute={'/Sanduche_Po_Boy.jpg'} product={test}></ProductCard>
          </section>
        </main>
      </>
    )
  
  }
export default MainContent