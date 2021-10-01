var employeeLeaveDetails = require('../model/employeeLeave.model');

// create and save new employee leave requests
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : req.body});
        return;
    }

    // new Employee Leave Request
    
    const leaveDetails = new employeeLeaveDetails({
        refno : req.body.refno,
        reasonforleave : req.body.reasonforleave,
        date : req.body.date
    })

    // save leave details in the database
    leaveDetails
        .save(leaveDetails)
        .then(data => {
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Error: Could not add employee leave request."
            });
        });

}

//retrive and return all leave details/retrieve a single leave details
exports.find = (req,res) =>{

    if(req.query.id){
        const id  = req.query.id;

        employeeLeaveDetails.findById(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message:"Could not find employee leave request with ID" + id});
            }else{
                res.send(data);
            }
        })
        .catch(err =>{
            res.status(500).send({message:"Error while retrieving Employee Leave Details with ID" +id})
        })
    }else{
        employeeLeaveDetails.find()
        .then(matCode => {
            res.send(matCode)
        })
        .catch(err =>{
            res.status(500).send({message:err.message || "Error: Cannot retrieve Employee Leave Details"})
        })
    }
}

//update a new identify leave details by id
exports.update = (req,res) => {
    if(!req.body){
        return res
                .status(400)
                .send({message:"Data cannot be empty."})
    }

    const id  = req.body.id;
    employeeLeaveDetails.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
    .then(data =>{
        if(!data){
            res.status(400).send({message:"Employee Leave Request ID not found."});
        }else{
            res.send(data);
        }
    })
    .catch(err =>{
        res.status(500).send({message:"Error while updating."})
    })
}

//Delete a leave request  with specified leave details id in the request
exports.delete = (req,res) => {
    const id  = req.body.id;

    employeeLeaveDetails.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(400).send({message:`Cannot delete Employee Request with $(id).`});
        }
        else{
            res.send({message:"Leave Details was deleted"});
        }
    })
    .catch(err =>{
        res.status(500).send({message:"Error while Deleting."})
    })

}