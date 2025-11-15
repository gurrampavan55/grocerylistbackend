import { useState, useEffect } from 'react'
import './App.css'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/items'

function App() {
  const [items, setItems] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch all items on mount
  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    try {
      setLoading(true)
      const response = await fetch(API_URL)
      const data = await response.json()
      if (data.success) {
        setItems(data.data)
        setError(null)
      }
    } catch (err) {
      setError('Failed to fetch items')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const addDefaultItems = async () => {
    try {
      const defaultItems = [
        { text: 'Milk' },
        { text: 'Bread' }
      ]
      for (let item of defaultItems) {
        await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(item)
        })
      }
      // Refresh items after adding defaults
      fetchItems()
    } catch (err) {
      console.error('Error adding default items:', err)
    }
  }

  const addItem = async () => {
    if (input.trim()) {
      const newItemText = input
      setInput('')
      
      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ text: newItemText })
        })
        const data = await response.json()
        if (data.success) {
          // Refresh items from database
          fetchItems()
          setError(null)
        } else {
          setError('Failed to add item')
        }
      } catch (err) {
        setError('Failed to add item')
        console.error(err)
      }
    }
  }

  const deleteItem = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      })
      const data = await response.json()
      if (data.success) {
        fetchItems()
        setError(null)
      } else {
        setError('Failed to delete item')
      }
    } catch (err) {
      setError('Failed to delete item')
      console.error(err)
    }
  }

  const toggleComplete = async (id) => {
    const item = items.find(i => i._id === id)
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          text: item.text, 
          completed: !item.completed 
        })
      })
      const data = await response.json()
      if (data.success) {
        fetchItems()
        setError(null)
      } else {
        setError('Failed to update item')
      }
    } catch (err) {
      setError('Failed to update item')
      console.error(err)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addItem()
    }
  }

  return (
    <div className="container">
      <h1>🛒 Grocery List</h1>
      
      {error && <div className="error-message">{error}</div>}
      
      <div className="input-section">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a grocery item..."
          className="input-field"
        />
        <button onClick={addItem} className="add-btn">Add</button>
        <button onClick={addDefaultItems} className="default-btn" title="Add default items">📋</button>
      </div>

      <div className="list-section">
        {loading ? (
          <p className="empty-message">Loading items...</p>
        ) : items.length === 0 ? (
          <p className="empty-message">No items yet. Add one to get started!</p>
        ) : (
          <ul className="grocery-list">
            {items.map(item => (
              <li key={item._id} className={`list-item ${item.completed ? 'completed' : ''}`}>
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleComplete(item._id)}
                  className="checkbox"
                />
                <span className="item-text">{item.text}</span>
                <button
                  onClick={() => deleteItem(item._id)}
                  className="delete-btn"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="stats">
        <p>Total items: <strong>{items.length}</strong></p>
        <p>Completed: <strong>{items.filter(i => i.completed).length}</strong></p>
      </div>
    </div>
  )
}

export default App
