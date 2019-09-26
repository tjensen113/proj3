import axios from "axios";

export default {
  // Gets all inventory
  createInventory: function(data) {
    return axios.post("/api/dashboard", data);
  },
  findAllInventory: function() {
    return axios.get("/api/dashboard");
  },
  // Gets the book with the given id
  getSingleInventory: function(id) {
    return axios.get("/api/dashboard/" + id);
  },
  // Deletes the book with the given id
  deleteInventory: function(id) {
    return axios.delete("/api/dashboard/" + id);
  },
  // Saves a book to the database
  updateInventory: function(bookData) {
    return axios.put("/api/dashboard", bookData);
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
