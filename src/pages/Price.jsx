import { useState, useEffect }  from 'react';
import { useParams } from 'react-router-dom';


function Price() {
    // make a variable to store our api key
    const apiKey = "6582CF5C-344E-43D9-AB37-B52032C92770";

    // get the currency symbol from the url
    // the following two lines get the params object from the url (address bar url)
    // and then we will save that into a variable called symbol to use later
    const params = useParams();
    console.log(params);
    const symbol = params.symbol;
    console.log(symbol);

    // use the apiKey and symbol variables to make our url to fetch with
    const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;
    console.log(url);

    // state to hold the coin data
    const [coin, setCoin] = useState(null);

    // function to fetch coin data
    const getCoin = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setCoin(data);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getCoin();
    }, []);

    const loaded = () => {
        return (
            <div>
                <h1> {coin.asset_id_base}/{coin.asset_id_quote} </h1>
                <h2>{coin.rate}</h2>
            </div>
        )
    }

    const loading = () => {
        return (
            <h1>loading</h1>
        )
    }

  return (
    coin && coin.rate ? loaded() : loading()
  )
}

export default Price