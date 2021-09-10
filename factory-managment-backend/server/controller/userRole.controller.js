var userRole = require('../model/userRole.model');

// create and save new materialcode
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : req.body});
        return;
    }

    // new materialcode
    
    const uRoles = new userRole({
        userRole : req.body.userRole,
        userRoleNo : req.body.userRoleNo,
        status : req.body.status
    })

    // save materialcode in the database
    uRoles
        .save(uRoles)
        .then(data => {
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create material code operation"
            });
        });

}

//retrive and return all materialcodes/retive a single materialcode'
exports.find = (req,res) =>{

    if(req.query.id){
        const id  = req.query.id;

        userRole.findById(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message:"not found userRole with id" + id});
            }else{
                res.send(data);
            }
        })
        .catch(err =>{
            res.status(500).send({message:"Error while retriving userRole with id" +id})
        })
    }else{
        userRole.find()
        .then(matCode => {
            res.send(matCode)
        })
        .catch(err =>{
            res.status(500).send({message:err.message || "Error on retriving userRole"})
        })
    }
}