import React, { useMemo, useReducer, useState } from 'react'

const Redux = () => {
 

const increment=()=>{
  dispatch({type:"increment",char:"I"})
}
const decrement=()=>{
  dispatch({type:"decrement",char:"D"})
}
const reducer=(state,action)=>{
   console.log(state)
   if(action.type==="increment"){
    return {count:state.count +1,char:action.char}
   }
   if(action.type==="decrement"){
    return {count:state.count -1,char:action.char}
   }
   
}
//this is also called a  redux hook

const [state,dispatch]=useReducer(reducer,{count:0,char:""})
// useMemo(()=>{
   
// },[increment,decrement,reducer])

  return (
    <div>
        hello this is redux
        <div className='flex flex-row py-10 justify-center items-center '>
            <div className='flex flex-col mt-5 gap-2 w-[100px]  h-[80px] '>
                <span className='bg-white text-black  cursor-pointer w-1/2 ' onClick={increment}>+</span>
                <span className='bg-white text-black cursor-pointer w-1/2 '  >{state.count+state.char}</span>
                <span className='bg-white text-black cursor-pointer  w-1/2 '  onClick={decrement}>-</span>
            </div>
        </div>
    </div>
  )
}

export default Redux
