import data from '../data'

export default function Stocks({name,price})
{
    return (<div className='container'>
        <h3>Name: {name}</h3>
        <h3>Price: {price}</h3>
    </div>)
}
