import { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [itemInput, setItemInput] = useState("");

  function updateInput(event) {
    setItemInput(event.target.value);
  }

  function addItem() {
    const newItem = {
      id: 1 + Math.random(),  // unique id
      input: itemInput
    }

    const listCopy = [...items];
    listCopy.push(newItem);

    setItems(listCopy);
    setItemInput("");
  }

  function deleteItem(id) {
    const listCopy = [...items];
    const listUpdated = listCopy.filter(item => item.id !== id);  // Return items that are not equal to id
    setItems(listUpdated);
  }

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <main>
        <label htmlFor='item'>Add Item:  </label>
        <input id='item' type="text" placeholder="Enter text here" value={itemInput} onChange={updateInput} />
        <button onClick={addItem}>Add Item</button>
        <ul>
          {items.map(item => {
            return (
              <li key={item.id}>
                {item.input + " "}
                <button onClick={() => deleteItem(item.id)}>x</button>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
