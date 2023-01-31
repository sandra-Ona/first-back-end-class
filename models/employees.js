const mongoose = require('mongoose');
const Schema= mongoose.Schema;
//name, roles, level, age
//time stamp would tell us when document was created and when it was updated....createdAt, updatedAt
const employeeSchema = new Schema({
   name:{
    type: String,
    required: true,
   },
   role:{
    type: String,
    required: true,
   },
   age:{
    type: Number,
    required: true,
   },
},
{timestamps: true}
);
module.exports = mongoose.model('Employee', employeeSchema);

//const Employee = mongoose.model('Employee', employeeSchema);
//module.exports = Employee;