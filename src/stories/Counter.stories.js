import Counter from "../Components/Counter";


export default {
    title:'Default Counter',
    component:Counter
}

export const defaultCounter = () =>(
    <Counter/>
)

export const defaultCounterWith10 = () =>(
    <Counter initilaize={10}/>
)