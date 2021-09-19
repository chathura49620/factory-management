var tempSalaries = require('../model/tempSalaries.model');

// create and save new factoryDetails
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : req.body});
        return;
    }

    // new factoryDetails
       
    const tempsal = new tempSalaries({ 
        empID : req.body.empID,
        amount : req.body.amount,
        month : req.body.month,
    })

    // save factoryDetails in the database
    tempsal
        .save(tempsal)
        .then(data => {
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create emp salaries operation"
            });
        });

}

//retrive and return all factory Details/retive a single factory Details'
exports.find = (req,res) =>{

    if(req.query.id){
        const id  = req.query.id;

        tempSalaries.findById(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message:"not found Employee Salaries with id" + id});
            }else{
                res.send(data); 
            }
        })
        .catch(err =>{
            res.status(500).send({message:"Error while retriving Employee Salaries with id" +id})
        })
    }else{
        tempSalaries.find()
        .then(tempsal => {
            res.send(tempsal)
        })
        .catch(err =>{
            res.status(500).send({message:err.message || "Error on retriving Employee Salaries"})
        })
    }
}