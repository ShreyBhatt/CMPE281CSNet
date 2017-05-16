var express = require('express');
var ejs = require('ejs');
var bcrypt = require('bcrypt-nodejs');
var mysql = require('./mysql');
var ssn = require('ssn');
var mongoose = require('mongoose');
var Node = require('../model/Node');
var Service = require('../model/Service');
var Cluster = require('../model/Cluster');
exports.viewAddAdminPage = function (req, res, next) {


    res.render('add_admin');
};

exports.viewAddNodePage = function (req, res, next) {


    res.render('add_node');
};

exports.viewAddClusterPage = function (req, res, next) {


    res.render('add_cluster');
};

exports.viewAddServicePage = function (req, res, next) {


    res.render('add_service');
};

exports.getNodes = function(req, res){

    Node.find({}, function(err, nodes){
       res.send(nodes);
    });

};
exports.getServices = function(req, res){

    Service.find({}, function(err, nodes){
       res.send(nodes);
    });

};
exports.getClusters = function(req, res){

    Node.find({}, function(err, nodes){
       res.send(nodes);
    });

};

exports.postNodes = function(req, res){

    var id = req.body.id;
    var name = req.body.name;
    var cluster = req.body.cluster;
    var services = req.body.services;

    var newnode = new Node({
        id: id,
        name: name,
        cluster: cluster,
        services: services
    });

    newnode.save(function(err){
        console.log('saved');
        res.end();
    })
};

exports.postCluster = function(req, res){

    var id = req.body.id;
    var name = req.body.name;
    var nodes = req.body.nodes;
    var services = req.body.services;

    var newcluster = new Cluster({
        id: id,
        name: name,
        nodes: nodes,
        services: services
    });

    newcluster.save(function(err){
        console.log('saved');
        res.end();
    })
};

exports.postService = function(req, res){

    var id = req.body.id;
    var name = req.body.name;
    var cluster = req.body.cluster;
    var node = req.body.node;

    var newservice = new Service({
        id: id,
        name: name,
        cluster: cluster,
        node: node
    });

    newservice.save(function(err){
        console.log('saved');
        res.end();
    })
};

exports.addAdmin = function (req, res, next) {


    var firstName = req.param("firstName");
    var lastName = req.param("lastName");
    var password = req.param("password");
    var encryptPassword = bcrypt.hashSync(password);
    var city = req.param("city");
    var state = req.param("state");
    var zip = req.param("zip");
    var email = req.param("email");
    var address = req.param("address");
    var contactNumber = req.param("contactNumber");
    var admin_id = ssn.generate();
    var query = "INSERT into airbnb.admin(firstName,lastName,password,city,state,zip,email,address,contactNumber,admin_id) VALUES ('" + firstName + "','" + lastName + "','" + encryptPassword + "','" + city + "','" + state + "','" + zip + "','" + email + "','" + address + "','" + contactNumber + "','" + admin_id + "');";

    mysql.storeData(function (err, result) {
        if (err) {
            throw err;
        } else if (result != null) {

            res.send("success");
        }
    }, query);
};