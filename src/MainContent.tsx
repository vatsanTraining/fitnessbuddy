import React, { JSX,useState } from 'react'
import { TrainerType } from './App'


const MainContent:React.FC<TrainerType> = ({trainer}:TrainerType):JSX.Element => {
  
    const [count,setCount] =useState<number>(1)
    return (
    <div>
        <p>        {trainer.trainerName} Trainer Number <span>{count}</span>
        </p>
        <p>        {trainer.tagName}
        </p>
        <p><button type="button" onClick={()=>setCount(prev=>prev+1)}>Click</button></p>
    </div> 
  )
}

export default MainContent