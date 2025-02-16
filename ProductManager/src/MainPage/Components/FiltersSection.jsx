import '../Styles/ComponentStyles/FilterSectionStyle.css'
import { useState } from 'react'



function FiltersSection() {
    const [sliderValue, setValue] = useState(50)

    function sliding(input){
        setValue(input.target.value)
    }

    return (
        <>
            <ul className="filters">
                <li><button>Cafes</button></li>
                <li><button>Sandwiches</button></li>
                <li><button>Cheesecakes</button></li>
                <li className='slidecontainer'>
                    <input type="range" min={1} max={100} value={sliderValue} className="slider" onChange={sliding}></input>
                    <p className='slidecontainer__count'>{sliderValue}</p>
                </li>
              </ul>
        </>
    )
}
export default FiltersSection