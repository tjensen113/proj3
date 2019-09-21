const express = require('express');
const router = express.Router();
const Inventory = require('../../models/Inventory');


//find all inventory 
router.get('/', (req, res) => {
    Inventory.find({})
      .then(inventory => res.json(inventory));
});
  
// add inventory
router.post('/', (req, res) => {
  Inventory
    .create(req.body)
    .then(dbModel => { res.json(dbModel) })
    .catch(err => res.status(500).json(err));
});

// update inventory
router.put('/', (req, res) => {
  console.log(req.body)


    Inventory
      .findOneAndUpdate({ _id: req.body._id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(500).json(err));
});

// delete inventory
router.delete('/:id', (req, res) => {
    Inventory
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(500).json(err));
});

// get 1 inventory item
router.get('/:id', (req, res) => {
    Inventory
        .findById({ _id: req.params.id })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(500).json(err));
});

module.exports = router;
