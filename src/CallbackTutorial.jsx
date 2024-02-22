import React, { useCallback, useState } from 'react'

const ChildComponent = ({onClick}) =>{
  console.log("childcomponent rendering");
  return(
    <button className='bg-appgreen' onClick={onClick}>Click Me</button>
  )
};
const CallbackTutorial = () => {
  const [count, setCount] = useState(0);

  const handleClick = () =>{
    console.log("Button Clicked");
  }
  const memoizedHandleClick = useCallback(()=>{
    console.log("Now button clicked from callback")
  },[]);
  return (
    <div className='flex justify-center items-center flex-col'>
      <h1>Use call back example</h1>
      <p>Count: {count}</p>
      <button onClick={()=>setCount(count+1)}>Increment Count</button>

      <br/>
      <ChildComponent onClick={handleClick}/>
      <br/>
      <br/>
      <ChildComponent onClick={memoizedHandleClick}/>
    </div>
  )
}

export default CallbackTutorial