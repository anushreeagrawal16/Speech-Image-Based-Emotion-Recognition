const mongoose = require('mongoose');

const EmployeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    gender: String,
    age: Number
})

const EmployeModel = mongoose.model('employes', EmployeSchema)
module.exports = EmployeModel