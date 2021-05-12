import React from 'react'

const Button = ({value,style,onclick})=>(
    <button 
    style={style}
    onClick={onclick}
    >
        {value}
    </button>
)
export default Button