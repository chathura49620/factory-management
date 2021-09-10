var employeeAssignmentDetails = require('../model/employeeassignment.model');

// create and save new employee Assignment requests
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : req.body});
        return;
    }

    // new Employee Assignment Request
     
    const assignmentDetails = new employeeAssignmentDetails({
        documentid : req.body.documentid,
        supervisor : req.body.supervisor,
        description : req.body.description,
        status : req.body.status
    })

    // save assignment details in the database
    assignmentDetails
        .save(assignmentDetails)
        .then(data => {
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Error: Could not add employee assiginment request."
            });
        });

}

//retrive and return all leave details/retrieve a single leave details
exports.find = (req,res) =>{

    if(req.query.id){
        const id  = req.query.id;

        employeeAssignmentDetails.findById(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message:"Could not find employee assignment with ID" + id});
            }else{
                res.send(data);
            }
        })
        .catch(err =>{
            res.status(500).send({message:"Error while retrieving Employee Assignment Details with ID" +id})
        })
    }else{
        employeeAssignmentDetails.find()
        .then(matCode => {
            res.send(matCode)
        })
        .catch(err =>{
            res.status(500).send({message:err.message || "Error: Cannot retrieve Employee Assignment Details"})
        })
    }
}

//update a new identify Assignment details by id
exports.update = (req,res) => {
    if(!req.body){
        return res
                .status(400)
                .send({message:"Data cannot be empty."})
    }

    const id  = req.body.id;
    employeeAssignmentDetails.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
    .then(data =>{
        if(!data){
            res.status(400).send({message:"Employee Assignment ID not found."});
        }else{
            res.send(data);
        }
    })
    .catch(err =>{
        res.status(500).send({message:"Error while updating."})
    })
}

//Delete an assignment with specified details id in the request
exports.delete = (req,res) => {
    const id  = req.body.id;

    employeeAssignmentDetails.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(400).send({message:`Cannot delete Employee Assignment with $(id).`});
        }
        else{
            res.send({message:"Assignment Details was deleted"});
        }
    })
    .catch(err =>{
        res.status(500).send({message:"Error while Deleting Assignment details."})
    })

}