// Child

import { useState } from "react";

function AddStockForm({ onAddStock }){

    const [stockName, setName] = useState("");
    const [price, setPrice] = useState("");
    const [amountCarried, setAmountCarried] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newStock = {
            id: Date.now(),
            stockName,
            price,
            amountCarried
        }

        onAddStock(newStock);

        setName("");
        setPrice("");
        setAmountCarried("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type= "text"
            value={stockName}
            onChange={(e) => setName(e.target.value)}
            placeholder="Stock Name"
            required
            />

            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              required
            />

            <input
              type="number"
              value={amountCarried}
              onChange={(e) => setAmountCarried(e.target.value)}
              placeholder="Amount On Hand"
              required
            />
             
            <Button label= "Add Stock"/>
        </form>
    );

}

export default AddStockForm;