'use strict'

var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/library';


// create
exports.insert = (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if (!err) {
      console.log(req.body);
      db.collection('Books').insertOne(req.body, (err, r) => {
        if (!err) res.send(req.body);
        else res.status(500).send(err);
      })
    } else {
      res.status(500).send(err);
    }
  })
}



// read
exports.findAll = (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if (!err) {
      // res.send('tes2')
      db.collection('Books').find().toArray((err, data) => {
        if(!err) res.send(data)
        else res.status(500).send(err);
      })
    } else {
      res.status(500).send(err);
    }
  })
}


exports.findById = (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if (!err) {
      // res.send('tes2')
      db.collection('Books').find({_id : ObjectID(req.params.id)}).toArray((err, data) => {
        if(!err) res.send(data)
        else res.status(500).send(err);
      })
    } else {
      res.status(500).send(err);
    }
  })
}


// update
exports.update = (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if(!err) {
      db.collection('Books').updateOne({_id : ObjectID(req.params.id)}, {$set : req.body}, (err, r) => {
        if (!err) res.send(r);
        else res.status(500).send(err);
      })
    } else {
      res.status(500).send(err);
    }
  })
}


// delete
exports.delete = (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if (!err) {
      db.collection('Books').deleteOne({_id : ObjectID(req.params.id)}, (err, r) => {
        if (!err) res.send(r);
        else res.status(500).send(err);
      })
    } else {
      res.status(500).send(err);
    }
  })
}
