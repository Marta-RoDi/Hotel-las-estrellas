const express = require('express');
const router  = express.Router();
const Offer = require('../models/Offer');

router.get('/', (req, res, next) => {
  Offer.find()
  .then(allOfferts => {
    res.json(allOfferts)
  })
})

router.get('/delete/:id', (req, res) =>{
  Offer.findByIdAndRemove(req.params.id).then(() => {
    Offer.find() .then(allOfferts => {
      res.json(allOfferts)
    })
  })
})

router.post('/new', (req, res) => {
  const {title, description, code} = req.body;
  Offer.create({
    title: title,
    description: description,
    code: code
  }).then(() => {
    Offer.find() .then(allOfferts => {
      res.json(allOfferts)
    })
  })
})


module.exports = router;