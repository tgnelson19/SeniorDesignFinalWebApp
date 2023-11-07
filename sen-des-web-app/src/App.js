import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [entryDate, setEntryDate] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [quantity, setQuantity] = useState('');

  const addItem = () => {
    const newItem = {
      name: name,
      cost: cost,
      entryDate: entryDate,
      expirationDate: expirationDate,
      quantity: quantity,
    };
    setItems([...items, newItem]);
    setName('');
    setCost('');
    setEntryDate('');
    setExpirationDate('');
    setQuantity('');
  };

  const removeItem = (index) => {
    const updatedItems = items.filter((item, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', backgroundColor: '#FFF3E0', padding: '20px' }}>
      <h1>Item List</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '10px', backgroundColor: '#FFD8A8', padding: '10px' }}>
        <p>Name</p>
        <p>Cost</p>
        <p>Entry Date</p>
        <p>Expiration Date</p>
        <p>Quantity</p>
      </div>
      <div style={{ backgroundColor: '#FFAB40', padding: '20px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Cost $"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
        <input
          type="text"
          placeholder="Entry Date"
          value={entryDate}
          onChange={(e) => setEntryDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Expiration Date"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button onClick={addItem} style={{ backgroundColor: '#FF8F00', color: 'white', padding: '10px', marginLeft: '10px', border: 'none' }}>
          Add Item
        </button>
      </div>
      <div style={{ backgroundColor: '#FFD180', padding: '20px' }}>
        {items.map((item, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'space-around', margin: '10px', padding: '10px', backgroundColor: '#FFAB40' }}>
            <p>{item.name}</p>
            <p>{item.cost}</p>
            <p>{item.entryDate}</p>
            <p>{item.expirationDate}</p>
            <p>{item.quantity}</p>
            <button onClick={() => removeItem(index)} style={{ backgroundColor: '#E65100', color: 'white', padding: '5px', border: 'none' }}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;