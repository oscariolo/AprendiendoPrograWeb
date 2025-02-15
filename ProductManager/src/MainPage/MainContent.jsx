import FilterSection from './Components/FiltersSection'

function MainContent() {

    return(
      <>
        <main className='main'>
          <aside className='main__filter'>
            <h1>Filtros</h1>
            <FilterSection></FilterSection>
          </aside>
  
          <section className='main__showcase'>
            <h1>
              
            </h1>
  
          </section>
        </main>
      </>
    )
  
  }
export default MainContent