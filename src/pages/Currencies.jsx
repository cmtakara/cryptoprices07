import React from 'react'

function Currencies() {
    const currencies = [
        { name: "Bitcoin", symbol: "BTC" },
        { name: "Litecoin", symbol: "LTC" },
        { name: "Ethereum", symbol: "ETH" },
        { name: "Ethereum Classic", symbol: "ETC" },
        { name: "Stellar Lumens", symbol: "XLM" },
        { name: "Dash", symbol: "DASH" },
        { name: "Ripple", symbol: "XRP" },
        { name: "Zcash", symbol: "ZEC" },
    ];


    return (
        <div className='currencies'>
            {currencies.map((coin) => {
                const { name, symbol } = coin;

                return (
                    <h2>{name}</h2>
                )
            })}
        </div>
    )
}

export default Currencies