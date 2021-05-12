import Button from "../Components/button";


export default {
    title:'Button',
    component:Button
}

export const btnlg = ()=>(
    <Button value={'Button Large'}
        style={{padding:'10px 100px' ,backgroundColor: 'blue',color:'white'}}
        onclick={()=>alert("StoryBook")}
        />
)

export const btnmd = ()=>(
    <Button value={'Button Medium'}
        style={{padding:'10px 50px' ,backgroundColor: 'red',color:'white'}}
        onclick={()=>alert("StoryBook")}
        />
)

export const btnsm = ()=>(
    <Button value={'Button Small'}
        style={{padding:'10px 10px' ,backgroundColor: 'green',color:'white'}}
        onclick={()=>alert("StoryBook")}
        />
)