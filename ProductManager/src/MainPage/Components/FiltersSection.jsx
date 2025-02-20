import '../Styles/ComponentStyles/FilterSectionStyle.css'
import { useState } from 'react'
import { FoodTypes } from '../Models/FoodTypes'

  

function FiltersSection({onValueChanged, onFoodTypeChanged, maxValue=20}) {
    
    const [sliderValue,setSliderValue] = useState(maxValue)

    function sliding(input){
        setSliderValue(input.target.value)
        onValueChanged(sliderValue)
    }

    return (
        <>
            <ul className="filters">
                <li><button onClick={()=>onFoodTypeChanged(FoodTypes.all)}>Todos</button></li>
                <li><button onClick={()=>onFoodTypeChanged(FoodTypes.cafe)}>Cafes</button></li>
                <li><button onClick={()=>onFoodTypeChanged(FoodTypes.all)}>Sandwiches</button></li>
                <li><button onClick={()=>onFoodTypeChanged(FoodTypes.cheesecake)}>Cheesecakes</button></li>
                <li className='slidecontainer'>
                    <input type="range" min={1} max={20} value={sliderValue} className="slider" onChange={sliding}></input>
                    <p className='slidecontainer__count'>{sliderValue}</p>
                </li>
            </ul>
        </>
    )
}
export default FiltersSection