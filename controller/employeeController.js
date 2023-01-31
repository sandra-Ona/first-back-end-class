const Employees= require('../models/employees');

//get all employees- /employees
const getEmployees=(req, res) =>{
    // res.send('Get all employees')
    Employees.find().then((data) =>{
        // res.status(200).json({ data })
        res.status(200).render("index", {employees: data});
    }).catch((err) => console.log(err));
}

//_id findById
//get a single employee- /employees/:id req.params
const getEmployee=(req, res) =>{
    // res.send('Get employee)'
    const {id}= req.params
    Employees.findById({ _id:id }).then((data) =>{
        // res.status(200).json({data})
        res.status(200).render("details", {employee: data});
    }).catch((err) => console.log(err));
};

//create a new employee-/employees req.body
const createEmployee=(req, res) =>{
    // res.send('Create employee')
    //name...role...age... req.body
    const {name, role, age} = req.body
    const employee = new Employees(req.body)
    employee.save().then((data) =>{
        // res.status(201).json({msg:"Employee created", data})
        res.redirect("/employees");
    }).catch((err) => console.log(err));
};

//update an employee- /employees/:id params, request body
const updateEmployee=(req, res) =>{
    // res.send('Update employee')
    const {id} = req.params
    Employees.findByIdAndUpdate({_id:id}, req.body, {new:true, runValidators:true})
    .then((data) => {res.status(200).json({msg:"Employee updated", data})
    }).catch((err) => console.log(err));

}

//delete a single employee- /employees/:id params
//findByIdAndDelete
const deleteEmployee=(req, res) =>{
    // res.send('Delete employee')
    const {id}= req.params;
    Employees.findByIdAndDelete({_id: id}).then((data) =>{
        res.status(200).json({redirect: "/employees"});
    }).catch((err) => console.log(err));
}

module.exports ={getEmployees, getEmployee, deleteEmployee, updateEmployee, createEmployee,};