import React from 'react'

const InventoryItem = props => (
  <li>
    <h3>{props.productName}</h3>
    <p>{props.type} | {props.quantity}</p>
    <p>{props.desciption}</p>
    <button onClick={() => props.handleEditClick(props._id)}>Edit</button>
    <button onClick={() => props.handleDeleteClick(props._id)}>X</button>
  </li>
)

export default InventoryItem