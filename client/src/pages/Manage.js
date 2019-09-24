import React from 'react'
import {
  withRouter
} from 'react-router-dom'
import API from '../utils/API'
import "./App.css"

class Manage extends React.Component {
  state = {
    item: {}
  }

  componentDidMount() {
    const id = this.props.location.state.id
    API.getSingleInventory(id)
      .then(res => this.setState( {item: res.data} ))
  }

  handleChange = event => {
    const { name, value } = event.target
    const newItem = this.state.item
    newItem[name] = value
    this.setState({
      item: newItem
    })
  }
  
  handleFormSubmit = event => {
    event.preventDefault();
    const { _id, productName, type, description, quantity } = this.state.item
    API.updateInventory({_id, productName, type, description, quantity })
      .then(() => this.props.history.push('/dashboard'))
  }

  render() {
    return (
      <div className="page"> 
      { this.state.item._id ? (

          <div>
            <div>Manage {this.state.item.productName}</div>
            {/* Edit Invetory Form */}
            <form onSubmit={this.handleFormSubmit}>
              <label htmlFor="productName">Product Name</label>
              <input 
                name="productName"
                type="text"
                value={this.state.item.productName}
                onChange={this.handleChange}
                className="form-control"
              />
              <label htmlFor="type">Product Type</label>
              <input 
                name="type"
                type="text"
                value={this.state.item.type}
                onChange={this.handleChange}
                className="form-control"
              />
              <label htmlFor="quantity">Quantity</label>
              <input 
                name="quantity"
                type="text"
                value={this.state.item.quantity}
                onChange={this.handleChange}
                className="form-control"
              />
              <label htmlFor="description">Description</label>
              <textarea 
                name="description"
                value={this.state.item.description}
                onChange={this.handleChange}
                className="form-control"
              />
              <button type="submit" className="btn btn-primary">Update</button>
            </form>
          </div>

        ) : (
          <p>Loading...</p>
        ) }     
      </div> 
    )
  }
}

export default withRouter(Manage)