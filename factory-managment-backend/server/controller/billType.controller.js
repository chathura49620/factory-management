var billType = require('../model/billType.model');

// create and save new category
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : req.body});
        return;
    }

    // new category
    
    const billT = new billType({
        billType : req.body.billType,
        status : req.body.status
    })

    // save category in the database
    billT
        .save(billT)
        .then(data => {
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create Bill Type operation"
            });
        });

}

//retrive and return all categories/retive a single category'
exports.find = (req,res) =>{

    if(req.query.id){
        const id  = req.query.id;

        billType.findById(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message:"not found Bill Type with id" + id});
            }else{
                res.send(data);
            }
        })
        .catch(err =>{
            res.status(500).send({message:"Error while retriving Bill Type with id" +id})
        })
    }else{
        billType.find()
        .then(biilT => {
            res.send(biilT)
        })
        .catch(err =>{
            res.status(500).send({message:err.message || "Error on retriving Bill Type"})
        })
    }
}

//update a new identify user by user id
exports.update = (req,res) => {
    if(!req.body){
        return res
                .status(400)
                .send({message:"Data to update can not be empty"})
    }

    const id  = req.body.id;
    billType.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
    .then(data =>{
        if(!data){
            res.status(400).send({message:"bill Type is not found"});
        }else{
            res.send(data);
        }
    })
    .catch(err =>{
        res.status(500).send({message:"Error while updateting"})
    })
}

//Delete a user with specified user id in the request
exports.delete = (req,res) => {
    const id  = req.body.id;

    billType.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(400).send({message:`cannot Delete bill Type with $(id). Maybe bill Type not found`});
        }
        else{
            res.send({message:"bill Type was deleted"});
        }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error while Deleting" });
    });
};
