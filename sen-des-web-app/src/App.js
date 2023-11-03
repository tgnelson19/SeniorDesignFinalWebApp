import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    const newItem = {
      name: 'Sample Item',
      cost: 10,
      entryDate: new Date().toLocaleDateString(),
      expirationDate: new Date().toLocaleDateString(),
      quantity: 1,
    };
    setItems([...items, newItem]);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Item List</h1>
      <button onClick={addItem}>Add Item</button>
      {items.map((item, index) => (
        <div key={index} style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
          <p>Name: {item.name}</p>
          <p>Cost: ${item.cost}</p>
          <p>Entry Date: {item.entryDate}</p>
          <p>Expiration Date: {item.expirationDate}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
}

export default App;