const express = require('express');
const router = express.Router();
const User = require('../../models/User');

router.get('/', (req, res) => {
    User.find({})
        .then(user => res.json(user))
})

router.post('/', (req, res) => {
    User
        .create(req.body)
        .then(dbModel => { res.json(dbModel) })
        .catch(err => res.status(500).json(err))
})

router.get('/:id', (req, res) => {
    User
        .findById({_id: req.params.id})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(500).json(err))
})

module.exports = router;