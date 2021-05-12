import React from 'react'
import {Text} from './text'
import Button from './button'
function Counter({initilaize=0}) {
    let [count, setCount] = React.useState(initilaize)
    return (
        <>
           <Text
               value="Counter app"
               style={{fontSize:'40px',fontWeight:'bold'}}
               />
               <Text
               value={`Counter Value : ${count}`}
               style={{fontSize:'30px',fontWeight:'bold'}}
               />
         <Button 
         value="Increment"
         style={{padding:'10px 50px',backgroundColor:'red',color:'white'}}
         onclick={()=>setCount(count + 1)}
         />
          <Button 
         value="Decrement"
         style={{padding:'10px 50px',backgroundColor:'blue',color:'white'}}
         onclick={()=>setCount(count - 1)}
         />
        </>
    )
}

export default Counter
