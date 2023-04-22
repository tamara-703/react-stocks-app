import { useParams } from "react-router-dom";
import data from "../data";
import { useEffect, useState } from "react";
import Stocks from "../Components/Stocks";

export default function Stock(props) {

  const symbolArr = [];
  const nameArr = [];
  const priceArr = [];

  const [name, setName] = useState("null");
  const [price, setPrice] = useState("null");

  //grab stock symbol from the url
  const param = useParams();
  const symbol = param.symbol;

  /* the props.data would work if we pass in a parameter called "data" in our Stock element in the App.js
      then we'd use the find method to see if we have the object that passes the condition (symbol === element.symbol)

  const updatedData = props.data.find((element) => symbol === element.symbol)

    in our return statement

    return (
      <div>
        <h2>{updatedData.name}</h2>
        <h2>{updatedData.symbol}</h2>
        <h2>{updatedData.lastPrice}</h2>
        .....all other properties
    )


  */

    const updatedData = props.data.find((element) => symbol === element.symbol)

  //grab the symbol from the data array
  data.map((item) => {
    symbolArr.push(item.symbol);
    nameArr.push(item.name);
    priceArr.push(item.lastPrice);
  });

  useEffect(() => {
    let stockName = "";
    let stockPrice = "";

    for (let i = 0; i < symbolArr.length; i++) {
      if (symbol === symbolArr[i]) {
        stockName = nameArr[i];
        stockPrice = priceArr[i];
      }
    }

    setName(stockName);
    setPrice(stockPrice);
  }, []);

  const loaded = () => {
    return (
      <div>
        <Stocks name={name} price={price} />
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading ...</h1>;
  };

  return (
    // <div>
    //   <div>{name && price ? loaded() : loading()}</div>
    // </div>

    <div>
        <h2>Name: {updatedData.name}</h2>
        <h2>Symbol: {updatedData.symbol}</h2>
        <h2>Price: {updatedData.lastPrice}</h2>
        <h2>Change: {updatedData.change}</h2>
        <h2>High: {updatedData.high}</h2>
        <h2>Low: {updatedData.low}</h2>
        <h2>Open: {updatedData.open}</h2>
        </div>
  );
}




// import {useParams} from "react-router-dom";
// import {useState} from "react";
// import data from "../data.js"


// export default function Stock (props){
//    const params = useParams()
//   const symbol = params.symbol;
//   //console.log(symbol);

//   const [stock, setStock] = useState(null);

//   if (stock === null) {
//     data.map((each) => {
//     if(each.symbol === symbol){
//       setStock(each);
//     }
//   })
//   }

//   if (stock !== null)
//   return (
//     <div>
//       <h1>{stock.name} </h1>
//       <p> <span className="bold">Last Price:</span> {stock.lastPrice} </p>
//       <p> <span className="bold">Change:</span> {stock.change} </p>
//       <p> <span className="bold">High:</span> {stock.high} </p>
//       <p> <span className="bold">Low:</span> {stock.low} </p>
//       <p> <span className="bold">Open:</span> {stock.open} </p>
//     </div>
//     )
//     else
//     return ( <div> </div>)
// };
