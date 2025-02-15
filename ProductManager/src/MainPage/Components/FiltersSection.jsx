import './ComponentStyles/FilterSectionStyle.css'
import { useState } from 'react'



function FiltersSection() {

    const [sliderValue, setValue] = useState(50)

    function sliding(input){
        setValue(input.value)
    }


    return (
        <>
            <ul className="filters">
                <li><button>Cafes</button></li>
                <li><button>Sandwiches</button></li>
                <li><button>Cheesecakes</button></li>
                <li><div className='slidecontainer'><input type="range" min={1} max={100} value={sliderValue} className="slider" onInput={sliding}></input></div></li>
              </ul>
        </>
    )
}
export default FiltersSection