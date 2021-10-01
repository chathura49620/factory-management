var user = require('../model/user.model');

// create and save new category
exports.create = (req,res)=>{  
    // validate request
    if(!req.body){  
        res.status(400).send({ message : req.body});
        return;
    }

    // new user
       
    const use = new user({  
        fullName: req.body.fullName,
        dob: req.body.dob,
        email: req.body.email,
        status: req.body.status,
        userRole: req.body.userRole,
        password: req.body.password,
        contact: req.body.contact,
        age: req.body.age,
        gender: req.body.gender,
        address: req.body.address,
        designation: req.body.designation,
        bankName: req.body.bankName,
        accountNumber: req.body.accountNumber,
        branch: req.body.branch,
        branchCode: req.body.branchCode,
        numberOfFamilyMembers: req.body.numberOfFamilyMembers,
    })

    // save category in the database
    use
        .save(use)
        .then(data => {  
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a user category operation"
            });
        });

}