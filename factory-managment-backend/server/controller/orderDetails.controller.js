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

    // save order details in the database
    orderDet
        .save(orderDet)
        .then(data => {
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Error: Could Not Add Order Details."
            });
        });

}


//retrive and return all new order details/retrieve a single order detail
exports.find = (req,res) =>{

    if(req.query.id){
        const id  = req.query.id;

        orderDetails.findById(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message:"Could Not Find Order Details With ID" + id});
            }else{
                res.send(data);
            }
        })
        .catch(err =>{
            res.status(500).send({message:"Error While Retrieving Order Details With ID" +id})
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


//update order details 
exports.update = (req,res) => {
    if(!req.body){
        return res
                .status(400)
                .send({message:"Data To Update Can Not Be Empty"})
    }

    const id  = req.body.id;
    orderDetails.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
    .then(data =>{
        if(!data){
            res.status(400).send({message:"Order Details Are Not Found"});
        }else{
            res.send(data);
        }
    })
    .catch(err =>{
        res.status(500).send({message:"Error While Order Details Updateting"})
    })
}

//Delete a order details with a requested order id
exports.delete = (req,res) => {
    const id  = req.body.id;

    orderDetails.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(400).send({message:`Can Not Delete Order Details With $(id).`});
        }
        else{
            res.send({message:"Order Details Was Deleted"});
        }
    })
    .catch(err =>{
        res.status(500).send({message:"Error While Deleting Order Details."})
    })

}

