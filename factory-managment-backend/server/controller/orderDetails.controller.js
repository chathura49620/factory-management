var orderDetails = require('../model/orderDetails.model');

// create and save new order details
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : req.body});
        return;
    }

    
    // order details
    
    const orderDet = new orderDetails({
        orderId : req.body.orderId,
        buyerName : req.body.buyerName,
        email : req.body.email,
        productCategory : req.body.productCategory,
        quantity : Number(req.body.quantity),
        paymentMethode : req.body.paymentMethode,
        status : req.body.status
    })

    // save new production round details in the database
    orderDet
        .save(orderDet)
        .then(data => {
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Error: Could not add order details."
            });
        });

}
//retrive and return all new production round details/retrieve a single production round details
exports.find = (req,res) =>{

    if(req.query.id){
        const id  = req.query.id;

        orderDetails.findById(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message:"Could not find order details with ID" + id});
            }else{
                res.send(data);
            }
        })
        .catch(err =>{
            res.status(500).send({message:"Error while retrieving order details with ID" +id})
        })
    }else{
        orderDetails.find()
        .then(matCode => {
            res.send(matCode)
        })
        .catch(err =>{
            res.status(500).send({message:err.message || "Error: Cannot Retrieve Order Details"})
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
    orderDetails.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
    .then(data =>{
        if(!data){
            res.status(400).send({message:"Order Details is not found"});
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

    orderDetails.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(400).send({message:`Cannot delete order details with $(id).`});
        }
        else{
            res.send({message:"Order Details was deleted"});
        }
    })
    .catch(err =>{
        res.status(500).send({message:"Error while Deleting."})
    })

}
