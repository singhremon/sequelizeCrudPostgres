const mytableDao = require('../dao/mytable.dao');
var mytableController = {
    addmyTable: addmyTable,
    findmyTables: findmyTables,
    findmyTableById: findmyTableById,
    updatemyTable: updatemyTable,
    deleteById: deleteById
}

function addmyTable(req, res) {
    let mytable = req.body;
    mytableDao.create(mytable).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findmyTableById(req, res) {
    mytableDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    mytableDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "myTable deleted successfully",
                mytable: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updatemyTable(req, res) {
    mytableDao.updatemyTable(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "myTable updated successfully",
                mytable: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findmyTables(req, res) {
    mytableDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = mytableController;