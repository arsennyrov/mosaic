import React, { useState } from "react";
import Mosaic from "./components/Mosaik";
import { data0 } from "./store";
import './App.css'

const App = () => {
    const data = [...data0]

    const strToArr = (str) => {
        const cellStr = str.split(',') 
        for (let i = 0; i<cellStr.length; i++) {
            data[i].value = +cellStr[i]
            if (i > 6) break
        }
        return data.filter(item => item.value > 0)
    }
    
    const [cells, setCells] = useState(data[0].value+', '+data[1].value+', '+
                                data[2].value+', '+data[3].value+', '+data[4].value+', '+
                                data[5].value+', '+data[6].value+', '+data[7].value)

    const handleClick = (e) => {
      setCells(e.target.value)
    }

    return (
        <div className="app__main">
            <div className='app__head'>
            <span className="app__span">
                Отредактируйте заданные числа или наберите через запятую до восьми целых положительных чисел. 
                Внешний прямоугольник рекурсивно разбивается на прямоуголники, площади которых 
                пропорциональны указанным числам. При изменении размеров окна пропорции сохраняются.
            </span>
                <input 
                    className='app__input' 
                    type="text"
                    value={cells} 
                    onChange={handleClick} 
                    />
            </div>
            
            <div className="app__mosaic">
                <Mosaic data={strToArr(cells)} />
            </div>
        </div>
    );
}

export default App;
