var materialcode = require('../model/materialcode.model');

// create and save new materialcode
exports.create = (req,res)=>{ 
    // validate request
    if(!req.body){
        res.status(400).send({ message : req.body});
        return;
    }

    // new materialcode
       
    const matCode = new materialcode({ 
        materialName : req.body.materialName,
        materialCode : req.body.materialCode,
        status : req.body.status
    })

    // save materialcode in the database
    matCode
        .save(matCode)
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
 
        materialcode.findById(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message:"not found material code with id" + id});
            }else{
                res.send(data);
            }
        })
        .catch(err =>{ 
            res.status(500).send({message:"Error while retriving material code with id" +id})
        })
    }else{
        materialcode.find()
        .then(matCode => { 
            res.send(matCode)
        })
        .catch(err =>{ 
            res.status(500).send({message:err.message || "Error on retriving material code"})
        })
    }
}

//update a new identify materialcode by materialcode id
exports.update = (req,res) => { 
    if(!req.body){
        return res
                .status(400)
                .send({message:"Data to update can not be empty"})
    }

    const id  = req.body.id;
    materialcode.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
    .then(data =>{
        if(!data){
            res.status(400).send({message:"matirel code id not found"});
        }else{
            res.send(data);
        }
    })
    .catch(err =>{
        res.status(500).send({message:"Error while updateting"})
    })
}

//Delete a materialcode with specified materialcode id in the request
exports.delete = (req,res) => {
    const id  = req.body.id;

    materialcode.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(400).send({message:`cannot Delete material code with $(id). Maybe material code not found`});
        }
        else{
            res.send({message:"material code was deleted"});
        }
    })
    .catch(err =>{
        res.status(500).send({message:"Error while Deleting"})
    })

}