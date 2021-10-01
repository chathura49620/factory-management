var feedbackDetails = require('../model/feedbackDetails.model');

// create and save new order details
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : req.body});
        return;
    }

    
    // feedback details
    
    const feedDet = new feedbackDetails({
        email : req.body.email,
        mobileNumber : Number(req.body.mobileNumber),
        feedback : req.body.feedback,
      
    })

    // save feedback details in the database
    feedDet
        .save(feedDet)
        .then(data => {
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Error: Could Not Add Feedback Details."
            });
        });

}


//retrive and return all new feedback details/retrieve a single feedback detail
exports.find = (req,res) =>{

    if(req.query.id){
        const id  = req.query.id;

        feedbackDetails.findById(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message:"Could Not Find Feedback Details With ID" + id});
            }else{
                res.send(data);
            }
        })
        .catch(err =>{
            res.status(500).send({message:"Error While Retrieving Feedback Details With ID" +id})
        })
    }else{
        feedbackDetails.find()
        .then(matCode => {
            res.send(matCode)
        })
        .catch(err =>{
            res.status(500).send({message:err.message || "Error: Cannot Retrieve Feedback Details"})
        })
    }
}






