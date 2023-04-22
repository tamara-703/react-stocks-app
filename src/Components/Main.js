import data from '../data'

export default function Main()
{
    let className = "";
    
    return (<div className='container'>
        <h1 className="main-header">Most active stocks</h1>
        <h2 className='headers'>Company name Price Change</h2>
        <div className='information-container'>
            {data.map((item,idx) => {
                {item.change < 0 ? className = "red" : className = "green"} //change color of change text depending on its value
                return (<div>
                    <div className='company-name'>
                        <ul>
                            <li>{item.name}</li>
                        </ul>
                    </div>
                    <div className='price'>
                        <ul>
                            <li>{item.lastPrice}</li>
                        </ul>
                    </div>
                    <div className='change'>
                        <ul>
                            <li className={className}>{Number.parseFloat(item.change).toFixed(5)}</li>
                        </ul>
                    </div>
                </div>)
            })}
        </div>
    </div>)
}
