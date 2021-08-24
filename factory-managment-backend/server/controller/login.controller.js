var user = require('../model/user.model');

//retrive and return all materialcodes/retive a single materialcode'
exports.find = (req,res) =>{

    if(req.body.id){
        const id  = req.body.id;

        user.findById(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message:"not found query with id" + id});
            }else{
                res.send(data);
            }
        })
        .catch(err =>{
            res.status(500).send({message:"Error while retriving query with id" +id})
        })
    }else{
        user.find()
        .then(matCode => {
            res.send(matCode)
        })
        .catch(err =>{
            res.status(500).send({message:err.message || "Error on retriving material code"})
        })
    }
}