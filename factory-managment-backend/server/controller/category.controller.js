var category = require('../model/category.model');

// create and save new category
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : req.body});
        return;
    }

    // new category
    
    const cat = new category({
        categoryName : req.body.categoryName,
        status : req.body.status
    })

    // save category in the database
    cat
        .save(cat)
        .then(data => {
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create category operation"
            });
        });

}

//retrive and return all categories/retive a single category'
exports.find = (req,res) =>{

    if(req.query.id){
        const id  = req.query.id;

        category.findById(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message:"not found user with id" + id});
            }else{
                res.send(data);
            }
        })
        .catch(err =>{
            res.status(500).send({message:"Error while retriving user with id" +id})
        })
    }else{
        category.find()
        .then(cat => {
            res.send(cat)
        })
        .catch(err =>{
            res.status(500).send({message:err.message || "Error on retriving user"})
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
    category.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
    .then(data =>{
        if(!data){
            res.status(400).send({message:"category is not found"});
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

    category.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(400).send({message:`cannot Delete Category with $(id). Maybe Category not found`});
        }
        else{
            res.send({message:"Category was deleted"});
        }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error while Deleting" });
    });
};
