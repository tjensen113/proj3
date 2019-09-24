import React from 'react'
import {
  withRouter
} from 'react-router-dom'
import API from '../utils/API'
import InventoryItem from '../components/InventoryItem'
import "./App.css"
;
class Dashboard extends React.Component {
  state = {
    productName: '',
    type: '',
    description: '',
    quantity: 0,
    inventoryItems: []
  }

  componentDidMount() {
    this.loadInventory()
  }
  
  handleEditClick = id => {
    this.props.history.push({
      pathname: '/manage',
      state: { id }
    })
  }
  
  handleDeleteClick = id => {
    API.deleteInventory(id)
    .then(() => this.loadInventory())
  }
  
  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { productName, type, description, quantity } = this.state
    API.createInventory({ productName, type, description, quantity })
      .then(() => this.loadInventory())
  }

  loadInventory = () => {
    API.findAllInventory()
       .then(allInventoryItems => {
        this.setState({
          inventoryItems: allInventoryItems.data,
          productName: '',
          type: '',
          description: '',
          quantity: 0,
        })
      })
  }

  render() {
    return (
      <div className="page">
        <h1 className="h1">Inventory</h1>

        {/* Add Invetory Form */}
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="productName"><h3>Product Name</h3></label>
          <input 
            name="productName"
            type="text"
            value={this.state.productName}
            onChange={this.handleChange}
            className="form-control"
          />
          <label htmlFor="type"><h3 className="h3">Type</h3></label>
          <input 
            name="type"
            type="text"
            value={this.state.type}
            onChange={this.handleChange}
            className="form-control"
          />
          <label htmlFor="quantity"><h3>Quantity</h3></label>
          <input 
            name="quantity"
            type="text"
            value={this.state.quantity}
            onChange={this.handleChange}
            className="form-control"
          />
          <label htmlFor="description"><h3>Description</h3></label>
          <textarea 
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            className="form-control"
          /><div className="button"><button type="submit" >Add</button></div>
          
        </form>


        {/* Inventory List */}
        
        <ul className="bottomPage">
          { 
            this.state.inventoryItems.map(item => (
              <InventoryItem 
                {...item} 
                handleEditClick={this.handleEditClick}
                handleDeleteClick={this.handleDeleteClick} 
                key={item._id}
              />
            ))
          }
        </ul>
        
        
      </div>
      
    )
  }
}

export default withRouter(Dashboard)