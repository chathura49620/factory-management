var productcode = require('../model/productCode.model');

// create and save new productcode
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : req.body});
        return;
    }

    // new productcode
    
    const proCode = new productcode({
        productCode : req.body.productCode,
        productCategory : req.body.productCategory,
        status : req.body.status
    })

    // save productcode in the database
    proCode
        .save(proCode)
        .then(data => {
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create product code operation"
            });
        });

}

//retrive and return all productcodes/retive a single productcode'
exports.find = (req,res) =>{

    if(req.query.id){
        const id  = req.query.id;

        productcode.findById(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message:"not found product code with id" + id});
            }else{
                res.send(data);
            }
        })
        .catch(err =>{
            res.status(500).send({message:"Error while retriving product code with id" +id})
        })
    }else{
        productcode.find()
        .then(matCode => {
            res.send(matCode)
        })
        .catch(err =>{
            res.status(500).send({message:err.message || "Error on retriving product code"})
        })
    }
}

//update a new identify productcode by productcode id
exports.update = (req,res) => {
    if(!req.body){
        return res
                .status(400)
                .send({message:"Data to update can not be empty"})
    }

    const id  = req.body.id;
    productcode.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
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

//Delete a productcode with specified productcode id in the request
exports.delete = (req,res) => {
    const id  = req.body.id;

    productcode.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(400).send({message:`cannot Delete product code with $(id). Maybe product code not found`});
        }
        else{
            res.send({message:"product code was deleted"});
        }
    })
    .catch(err =>{
        res.status(500).send({message:"Error while Deleting"})
    })

}