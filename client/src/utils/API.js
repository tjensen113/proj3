import axios from "axios";

export default {
  // Gets all inventory
  createInventory: function(data) {
    return axios.post("/api/inventory", data);
  },
  findAllInventory: function() {
    return axios.get("/api/inventory");
  },
  // Gets the book with the given id
  getSingleInventory: function(id) {
    return axios.get("/api/inventory/" + id);
  },
  // Deletes the book with the given id
  deleteInventory: function(id) {
    return axios.delete("/api/inventory/" + id);
  },
  // Saves a book to the database
  updateInventory: function(bookData) {
    return axios.put("/api/inventory", bookData);
  },

  /********************
      Users API
  *********************/

  createUser: function(data) {
    return axios.post("/api/user", data);
  },
  findAllUser: function() {
    return axios.get ("/api/user")
  },
  getSingleUser: function(id) {
    return axios.get("/api/user/" + id)
  }

};
