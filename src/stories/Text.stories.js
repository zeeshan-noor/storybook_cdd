import {Text} from "../Components/text";


export default {
    title:'Text',
    component:Text
}

export const btnlg = ()=>(
    <Text value={'Text Large'}
        style={{fontSize:'60px'}}
        />
)

export const btnmd = ()=>(
    <Text value={'Text Medium'}
    style={{fontSize:'40px'}}
        />
)

export const btnsm = ()=>(
    <Text value={'Text Small'}
    style={{fontSize:'20px'}}
        />
)