var factoryDetails = require('../model/factoryIntialDetails.model');

// create and save new factoryDetails
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : req.body});
        return;
    }

    // new factoryDetails
    
    const facDetails = new factoryDetails({ 
        companyName : req.body.companyName,
        companyAddress : req.body.companyAddress,
        ownerName : req.body.ownerName,
        companyLogo : req.body.companyLogo,
        mainProduct : req.body.mainProduct,
        br : req.body.br, 
        startDate : req.body.startDate,
        is_added : req.body.is_added
    })

    // save factoryDetails in the database
    facDetails
        .save(facDetails)
        .then(data => {
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create factory Details operation"
            });
        });

}

//retrive and return all factory Details/retive a single factory Details'
exports.find = (req,res) =>{

    if(req.query.id){
        const id  = req.query.id;

        factoryDetails.findById(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message:"not found factory Details with id" + id});
            }else{
                res.send(data); 
            }
        })
        .catch(err =>{
            res.status(500).send({message:"Error while retriving factory Details with id" +id})
        })
    }else{
        factoryDetails.find()
        .then(matCode => {
            res.send(matCode)
        })
        .catch(err =>{
            res.status(500).send({message:err.message || "Error on retriving factory Details"})
        })
    }
}

//update a new identify factoryDetails by factoryDetails id
exports.update = (req,res) => { 
    if(!req.body){
        return res
                .status(400)
                .send({message:"Data to update can not be empty"})
    }

    const id  = req.body.id;
    factoryDetails.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
    .then(data =>{
        if(!data){
            res.status(400).send({message:"factory Details id not found"});
        }else{
            res.send(data);
        } 
    })
    .catch(err =>{
        res.status(500).send({message:"Error while updateting"})
    })
}

//Delete a factory Details with specified factory Details id in the request
exports.delete = (req,res) => {
    const id  = req.body.id;

    factoryDetails.findByIdAndDelete(id)
    .then(data=>{ 
        if(!data){
            res.status(400).send({message:`cannot Delete factory Details with $(id). Maybe factory Details not found`});
        }
        else{
            res.send({message:"factory Details was deleted"});
        }
    })
    .catch(err =>{
        res.status(500).send({message:"Error while Deleting"})
    })

}