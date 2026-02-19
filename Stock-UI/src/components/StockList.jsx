// Child

function StockList({stocks}){    
    return (
        <div>
            <h2>Stock On Hand</h2>
            {stocks.map(stock => (key=stock.id))}
        </div>
    );
}

export default StockList