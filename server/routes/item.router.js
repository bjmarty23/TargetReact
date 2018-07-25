const express = require('express');
const router = express.Router();
const Model = require('../models/model');

//GET ROUTE
module.exports = (app) => {
    app.get('/api/model', (req, res, next) => {
      model.find()
        .exec()
        .then((model) => res.json(model))
        .catch((err) => next(err));
    });

// END GET Route

//UPDATE ROUTE

app.put('/api/model/:id/increment', (req, res, next) => {
    model.findById(req.params.id)
      .exec()
      .then((counter) => {
        model.count++;

        model.save()
          .then(() => res.json(model))
          .catch((err) => next(err));
      })
      .catch((err) => next(err));
  });
}
module.exports = router;