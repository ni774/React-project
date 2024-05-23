import { useEffect, useState } from "react";


//**********************design custom hook */

function useCurrencyInfo(currency){
    console.log(currency,"curry");
    const [data, setData] = useState({});
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`).then((res)=>{
        // console.log("r",res.json())    
        return res.json();
        }).then((res)=>{
            // console.log("res",res[])
            setData(res[currency])
        })
        // console.table("table",data);
    },[currency])

    return data;
}   

export default useCurrencyInfo;