var newProductionRoundDetails = require('../model/newProductionRound.model');

// create and save new production round details
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : req.body});
        return;
    }

    
    // new production round details
    
    const newProductionRoundDet = new newProductionRoundDetails({
        productId : req.body.productId,
        productCategory : req.body.productCategory,
        quantity : Number(req.body.quantity),
        esDays : Number(req.body.esDays),
        esEmployees : Number(req.body.esEmployees),
        status : req.body.status
    })

    // save new production round details in the database
    newProductionRoundDet
        .save(newProductionRoundDet)
        .then(data => {
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Error: Could not add new production round details."
            });
        });

}
//retrive and return all new production round details/retrieve a single production round details
exports.find = (req,res) =>{

    if(req.query.id){
        const id  = req.query.id;

        newProductionRoundDetails.findById(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message:"Could not find new production details with ID" + id});
            }else{
                res.send(data);
            }
        })
        .catch(err =>{
            res.status(500).send({message:"Error while retrieving new production round Details with ID" +id})
        })
    }else{
        newProductionRoundDetails.find()
        .then(matCode => {
            res.send(matCode)
        })
        .catch(err =>{
            res.status(500).send({message:err.message || "Error: Cannot retrieve New Production Round Details"})
        })
    }
}

//update a new Production ROund 
exports.update = (req,res) => {
    if(!req.body){
        return res
                .status(400)
                .send({message:"Data to update can not be empty"})
    }

    const id  = req.body.id;
    newProductionRoundDetails.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
    .then(data =>{
        if(!data){
            res.status(400).send({message:"New Production Round Details is not found"});
        }else{
            res.send(data);
        }
    })
    .catch(err =>{
        res.status(500).send({message:"Error while updateting"})
    })
}

//Delete a leave request  with specified leave details id in the request
exports.delete = (req,res) => {
    const id  = req.body.id;

    newProductionRoundDetails.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(400).send({message:`Cannot delete production details with $(id).`});
        }
        else{
            res.send({message:"New Production Round  Details was deleted"});
        }
    })
    .catch(err =>{
        res.status(500).send({message:"Error while Deleting."})
    })

}

