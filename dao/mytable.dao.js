const myTable = require('../models/myTable');
var mytableDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updatemyTable: updatemyTable
}

function findAll() {
    return myTable.findAll();
}

function findById(id) {
    return myTable.findByPk(id);
}

function deleteById(id) {
    return myTable.destroy({ where: { id: id } });
}

function create(mytable) {
    var newmyTable = new myTable(mytable);
    return newmyTable.save();
}

function updatemyTable(mytable, id) {
    var updatemyTable = {
        title: mytable.title,
        technologies: mytable.technologies,
        description: mytable.description,
        budget: mytable.budget,
        contact_email: mytable.contact_email
    };
    return myTable.update(updatemyTable, { where: { id: id } });
}
module.exports = mytableDao;