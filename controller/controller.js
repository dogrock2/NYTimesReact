const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const db = require("../model");

module.exports = function (app) {

    app.get("/api/articles", function (req, res) {        
        db.Article.find({}).then(function(result) { 
            res.json(result);
        });
    });
    app.post("/api/articles", function (req, res) {
        db.Article.create({ 
            title: req.body.data.dataObj.title,
            url: req.body.data.dataObj.url,
            desc: req.body.data.dataObj.desc,
            date: req.body.data.dataObj.date
        }).then(function(data){
            res.send(data);
        }).catch(function(err) {  
            console.log(err);
            res.json(err.code);
        });
    });
    app.delete("/api/articles", function (req, res) {        
        db.Article.remove({_id: req.body.articleId}).then(function(result) {
            res.send(result);
        });
    });

}; //ends module exports